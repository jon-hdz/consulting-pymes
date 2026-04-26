# Sistema de Brief - Guía de Setup

## 📋 Archivos Creados

Se han creado los siguientes archivos para el sistema de brief de clientes:

### Estructura de Carpetas
```
/app
  /clientes/brief/
    page.tsx                    ← Página del formulario
  /api/clientes/brief/
    route.ts                    ← API endpoint POST
  /lib/
    validators.ts               ← Funciones de validación
    google-drive-utils.ts       ← Integración con Google APIs
  /components/
    FormField.tsx               ← Componente de input reutilizable
    FormSection.tsx             ← Componente de sección del formulario
    SuccessModal.tsx            ← Modal de éxito
```

### Dependencias Instaladas
```json
{
  "googleapis": "^140.0.0",
  "google-auth-library": "^9.14.1"
}
```

## 🔐 Configuración de Google Cloud

### 1. Crear Service Account en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a **APIs & Services** → **Credentials**
4. Haz clic en **Create Credentials** → **Service Account**
5. Completa los detalles del servicio
6. En la página del service account, ve a **Keys** → **Create Key** → **JSON**
7. Descarga el archivo JSON

### 2. Habilitar APIs Necesarias

En **APIs & Services** → **Library**, habilita:
- **Google Sheets API**
- **Google Drive API**

### 3. Otorgar Permisos al Service Account

1. Obtén el email del service account (algo como: `name@project.iam.gserviceaccount.com`)
2. Comparte tu Google Sheet con ese email (rol: **Editor**)
3. Comparte la carpeta en Google Drive con ese email (rol: **Editor**)

## 🔑 Variables de Entorno

### Obtener el GOOGLE_SERVICE_ACCOUNT_KEY

1. Abre el archivo JSON descargado
2. Codifícalo en base64:
   ```bash
   cat tu-archivo-clave.json | base64 | tr -d '\n'
   ```
3. Copia el resultado y pégalo en `GOOGLE_SERVICE_ACCOUNT_KEY`

### Configurar `.env.local`

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000

# Google Service Account
GOOGLE_SERVICE_ACCOUNT_EMAIL=tu-service-account@tu-proyecto.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_KEY=tu_clave_json_base64_encoded_sin_saltos_de_linea

# Google Sheets ID (de la URL: docs.google.com/spreadsheets/d/ID/edit)
GOOGLE_SHEETS_ID=1a2b3c4d5e6f7g8h9i0j

# Google Drive Folder ID (de la URL: drive.google.com/drive/folders/ID)
GOOGLE_DRIVE_FOLDER_ID=1x2y3z4w5v6u7t8s9r0q
```

## 📊 Preparar Google Sheets

1. Crea un nuevo Google Sheet
2. En la primera fila, agrega estos encabezados (en este orden exacto):

```
clientId | timestamp | nombreEmpresa | queVenden | tiempoOperacion | ingresosMensuales | tamanoEquipo | clientesActuales | nichoSegmento | tamanoMercado | tendenciasActuales | perfilDemografico | dondeSeEncuentran | comoTomaDecisiones | competidoresTop | queHacenBien | queHacenMal | diferenciacion | objetivosPlazo | clientesNuevosObjetivo | ingresosObjetivo | otrosObjetivos | mayorReto | queImpideCrecimiento | budgetDisponible | equipoDisponible | nombreContacto | emailContacto | telefonoContacto | mejorFormaContacto
```

3. Copia el ID del sheet (de la URL)

## 📁 Preparar Google Drive

1. Crea una carpeta llamada "clientes" (o el nombre que prefieras)
2. Comparte la carpeta con el service account
3. Copia el ID de la carpeta (de la URL)

## 🚀 Ejecutar Localmente

```bash
# Instalar dependencias
npm install

# Crear .env.local con las variables (ver arriba)

# Iniciar servidor de desarrollo
npm run dev
```

Visita: `http://localhost:3000/clientes/brief`

## 🧪 Testing Manual

### 1. Rellenar Formulario
- Completa todas las secciones del formulario
- Navega entre secciones con "Anterior" y "Siguiente"
- Valida que los mensajes de error aparezcan si faltan campos requeridos

### 2. Enviar Formulario
- Haz clic en "Enviar Brief"
- Verifica que aparezca un modal de éxito

### 3. Verificar Google Sheets
- Abre tu Google Sheet
- Verifica que se haya creado una nueva fila con los datos

### 4. Verificar Google Drive
- Abre la carpeta en Google Drive
- Verifica que se haya creado una nueva carpeta con el nombre de la empresa
- Verifica que contenga 7 archivos `.md`:
  - 01-identidad.md
  - 02-publico-objetivo.md
  - 03-competidores.md
  - 04-objetivos.md
  - 05-dolores-retos.md
  - 06-mercado.md
  - 07-contacto.md

## 🔍 Troubleshooting

### Error: "Missing Google service account credentials"
- Verifica que `GOOGLE_SERVICE_ACCOUNT_EMAIL` y `GOOGLE_SERVICE_ACCOUNT_KEY` están en `.env.local`
- Reinicia el servidor de desarrollo

### Error: "Failed to parse Google service account key"
- La clave JSON no está correctamente codificada en base64
- Asegúrate de eliminar todos los saltos de línea al codificar

### Error: "Permission denied" en Google Sheets/Drive
- El service account email no está compartido con el sheet/carpeta
- Ve a Google Sheets/Drive y comparte manualmente con el email

### El formulario no valida
- Verifica que todos los campos requeridos estén completos
- Revisa la consola del navegador (F12) para mensajes de error

## 📈 Próximos Pasos

Una vez que el brief esté funcionando, puedes:

1. **Integraciones Automáticas:**
   - Enviar correos al cliente cuando se crea el brief
   - Integrar con Slack para notificaciones
   - Generar landing pages personalizadas con Claude API

2. **Mejoras UX:**
   - Agregar guardado automático del formulario
   - Permitir descargar el brief como PDF
   - Agregar más validaciones en tiempo real

3. **Analytics:**
   - Trackear cuántos briefs se completan
   - Medir el tiempo promedio de completación
   - Analizar qué secciones son más difíciles

## 📝 Notas Importantes

- **Seguridad:** Nunca commits `.env.local` a Git. Ya está en `.gitignore`
- **Rate Limiting:** Google Sheets API tiene límites, pero suficiente para este uso
- **Base64 Encoding:** La clave del service account DEBE estar en base64 sin saltos de línea
- **Permisos:** El service account necesita permisos de Editor en Sheets y Drive

## 💬 Soporte

Si tienes problemas:
1. Revisa los logs en la consola del navegador (F12)
2. Revisa los logs del servidor (`npm run dev`)
3. Verifica que todas las variables de entorno estén correctas
4. Asegúrate de que el service account tiene acceso a Sheets y Drive

---

**Versión:** 1.0  
**Última actualización:** 2026-04-23
