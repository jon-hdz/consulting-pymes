import { NextRequest, NextResponse } from 'next/server';
import { validateFormData } from '@/app/lib/validators';
import {
  insertRowInSheet,
  createBriefFolderAndFiles,
  generateClientId,
} from '@/app/lib/google-drive-utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validación fallida',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Generate unique client ID
    const clientId = generateClientId();

    // Prepare data for Google Sheets
    const sheetValues = [
      clientId,
      new Date().toISOString(),
      body.nombreEmpresa,
      body.queVenden,
      body.tiempoOperacion,
      body.ingresosMensuales,
      body.tamanoEquipo,
      body.clientesActuales,
      body.nichoSegmento,
      body.tamanoMercado,
      body.tendenciasActuales,
      body.perfilDemografico,
      body.dondeSeEncuentran,
      body.comoTomaDecisiones,
      body.competidoresTop,
      body.queHacenBien,
      body.queHacenMal,
      body.diferenciacion,
      body.objetivosPlazo,
      body.clientesNuevosObjetivo,
      body.ingresosObjetivo,
      body.otrosObjetivos,
      body.mayorReto,
      body.queImpideCrecimiento,
      body.budgetDisponible,
      body.equipoDisponible,
      body.nombreContacto,
      body.emailContacto,
      body.telefonoContacto,
      body.mejorFormaContacto,
    ];

    // Save to Google Sheets
    await insertRowInSheet(sheetValues);

    // Create folder and files in Google Drive
    const briefResult = await createBriefFolderAndFiles(body, clientId);

    return NextResponse.json(
      {
        success: true,
        message: 'Brief creado exitosamente',
        clientId,
        folderId: briefResult.folderId,
        filesCreated: briefResult.files.length,
        company: body.nombreEmpresa,
        contact: body.nombreContacto,
        email: body.emailContacto,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in brief API:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Error desconocido';

    return NextResponse.json(
      {
        success: false,
        message: 'Error al crear el brief',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
