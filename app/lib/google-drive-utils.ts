import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import type { drive_v3 } from 'googleapis';

let driveClient: drive_v3.Drive | null = null;
let sheetsClient: any = null;
let authClient: JWT | null = null;

function getAuthClient(): JWT {
  if (authClient) return authClient;

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountEmail || !serviceAccountKey) {
    throw new Error(
      'Missing Google service account credentials. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_KEY'
    );
  }

  try {
    const keyObject = JSON.parse(
      Buffer.from(serviceAccountKey, 'base64').toString('utf-8')
    );

    authClient = new JWT({
      email: keyObject.client_email,
      key: keyObject.private_key,
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    return authClient;
  } catch (error) {
    throw new Error(
      'Failed to parse Google service account key. Make sure it is properly base64 encoded JSON.'
    );
  }
}

export function getDriveClient(): drive_v3.Drive {
  if (driveClient) return driveClient;

  const auth = getAuthClient();
  driveClient = google.drive({ version: 'v3', auth });

  return driveClient;
}

export function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  const auth = getAuthClient();
  sheetsClient = google.sheets({ version: 'v4', auth });

  return sheetsClient;
}

export function sanitizeFolderName(name: string): string {
  return name
    .replace(/[<>:"/\\|?*]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 255);
}

export async function insertRowInSheet(values: string[]): Promise<boolean> {
  const sheetsAPI = getSheetsClient();
  const sheetId = process.env.GOOGLE_SHEETS_ID;

  if (!sheetId) {
    throw new Error('Missing GOOGLE_SHEETS_ID environment variable');
  }

  try {
    await sheetsAPI.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:Z',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    });

    return true;
  } catch (error) {
    console.error('Error inserting row in sheet:', error);
    throw error;
  }
}

export async function createFolder(
  parentFolderId: string,
  folderName: string
): Promise<string> {
  const drive = getDriveClient();
  const sanitizedName = sanitizeFolderName(folderName);

  try {
    const response = await drive.files.create({
      requestBody: {
        name: sanitizedName,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [parentFolderId],
      },
      fields: 'id',
    });

    const folderId = response.data.id;
    if (!folderId) {
      throw new Error('Failed to create folder - no ID returned');
    }

    return folderId;
  } catch (error) {
    console.error('Error creating folder:', error);
    throw error;
  }
}

export async function createFile(
  folderId: string,
  fileName: string,
  content: string
): Promise<string> {
  const drive = getDriveClient();

  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [folderId],
        mimeType: 'text/markdown',
      },
      media: {
        mimeType: 'text/markdown',
        body: content,
      },
      fields: 'id',
    });

    const fileId = response.data.id;
    if (!fileId) {
      throw new Error('Failed to create file - no ID returned');
    }

    return fileId;
  } catch (error) {
    console.error('Error creating file:', error);
    throw error;
  }
}

// Markdown content generators
export function generateIdentityMarkdown(data: Record<string, any>): string {
  return `# Identidad - ${data.nombreEmpresa}

## Información General
- **Nombre de Empresa:** ${data.nombreEmpresa}
- **Años en Operación:** ${data.tiempoOperacion} años
- **Clientes Actuales:** ${data.clientesActuales}
- **Tamaño del Equipo:** ${data.tamanoEquipo} personas

## Descripción del Negocio
${data.queVenden}

## Ingresos Mensuales Aproximados
${data.ingresosMensuales}
`;
}

export function generatePublicoObjetivoMarkdown(data: Record<string, any>): string {
  return `# Público Objetivo

## Perfil Demográfico
${data.perfilDemografico}

## Dónde se Encuentran
${data.dondeSeEncuentran}

## Cómo Toman Decisiones
${data.comoTomaDecisiones}
`;
}

export function generateCompetidoresMarkdown(data: Record<string, any>): string {
  return `# Análisis de Competidores

## Competidores Principales
${data.competidoresTop}

## Fortalezas de Competidores
${data.queHacenBien}

## Debilidades de Competidores
${data.queHacenMal}

## Nuestra Diferenciación
${data.diferenciacion}
`;
}

export function generateObjetivosMarkdown(data: Record<string, any>): string {
  return `# Objetivos

## Plazo
${data.objetivosPlazo}

## Clientes Nuevos a Obtener
${data.clientesNuevosObjetivo}

## Ingresos Objetivo
${data.ingresosObjetivo}

## Otros KPIs y Metas
${data.otrosObjetivos}
`;
}

export function generateDoloresRetosMarkdown(data: Record<string, any>): string {
  return `# Dolores y Retos

## Mayor Reto Actual
${data.mayorReto}

## Obstáculos para Crecer
${data.queImpideCrecimiento}

## Budget Disponible
${data.budgetDisponible}

## Equipo Disponible para Ejecutar
${data.equipoDisponible}
`;
}

export function generateMercadoMarkdown(data: Record<string, any>): string {
  return `# Mercado

## Nicho/Segmento
${data.nichoSegmento}

## Tamaño del Mercado
${data.tamanoMercado}

## Tendencias Actuales
${data.tendenciasActuales}
`;
}

export function generateContactoMarkdown(data: Record<string, any>): string {
  return `# Información de Contacto

## Contacto Principal
- **Nombre:** ${data.nombreContacto}
- **Email:** ${data.emailContacto}
- **Teléfono:** ${data.telefonoContacto}
- **Mejor Forma de Contacto:** ${data.mejorFormaContacto}

---

**Formulario completado:** ${new Date().toLocaleString('es-MX')}
`;
}

export async function createBriefFolderAndFiles(
  data: Record<string, any>,
  clientId: string
): Promise<{ folderId: string; files: string[] }> {
  const parentFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!parentFolderId) {
    throw new Error('Missing GOOGLE_DRIVE_FOLDER_ID environment variable');
  }

  try {
    // Create folder
    const folderName = `${clientId}_${data.nombreEmpresa}`;
    const folderId = await createFolder(parentFolderId, folderName);

    // Create markdown files
    const files = await Promise.all([
      createFile(folderId, '01-identidad.md', generateIdentityMarkdown(data)),
      createFile(folderId, '02-publico-objetivo.md', generatePublicoObjetivoMarkdown(data)),
      createFile(folderId, '03-competidores.md', generateCompetidoresMarkdown(data)),
      createFile(folderId, '04-objetivos.md', generateObjetivosMarkdown(data)),
      createFile(folderId, '05-dolores-retos.md', generateDoloresRetosMarkdown(data)),
      createFile(folderId, '06-mercado.md', generateMercadoMarkdown(data)),
      createFile(folderId, '07-contacto.md', generateContactoMarkdown(data)),
    ]);

    return {
      folderId,
      files,
    };
  } catch (error) {
    console.error('Error creating brief folder and files:', error);
    throw error;
  }
}

export function generateClientId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `CLIENT_${timestamp}_${random}`;
}
