export type ValidationResult = {
  valid: boolean;
  error?: string;
};

export type FormData = Record<string, any>;

export type ValidationErrors = Record<string, string>;

export function validateRequired(value: string | number | undefined): ValidationResult {
  if (!value || String(value).trim() === '') {
    return {
      valid: false,
      error: 'Este campo es requerido',
    };
  }
  return { valid: true };
}

export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      valid: false,
      error: 'Email inválido',
    };
  }
  return { valid: true };
}

export function validatePhone(phone: string): ValidationResult {
  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    return {
      valid: false,
      error: 'Teléfono debe tener al menos 10 dígitos',
    };
  }
  return { valid: true };
}

export function validateNumber(value: string | number): ValidationResult {
  const num = Number(value);
  if (isNaN(num) || num < 0) {
    return {
      valid: false,
      error: 'Debe ser un número válido',
    };
  }
  return { valid: true };
}

export function validateMinLength(value: string, minLength: number): ValidationResult {
  if (value.length < minLength) {
    return {
      valid: false,
      error: `Mínimo ${minLength} caracteres`,
    };
  }
  return { valid: true };
}

export function validateFormData(data: FormData): { valid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  // Sección 1: Sobre el Negocio
  if (!validateRequired(data.nombreEmpresa).valid) {
    errors.nombreEmpresa = 'Nombre de empresa es requerido';
  }

  if (!validateRequired(data.queVenden).valid) {
    errors.queVenden = 'Descripción de producto/servicio es requerida';
  }

  if (!validateRequired(data.tiempoOperacion).valid) {
    errors.tiempoOperacion = 'Años en operación es requerido';
  } else if (!validateNumber(data.tiempoOperacion).valid) {
    errors.tiempoOperacion = 'Debe ser un número válido';
  }

  if (!validateRequired(data.ingresosMensuales).valid) {
    errors.ingresosMensuales = 'Ingresos mensuales aproximados son requeridos';
  }

  if (!validateRequired(data.tamanoEquipo).valid) {
    errors.tamanoEquipo = 'Tamaño del equipo es requerido';
  } else if (!validateNumber(data.tamanoEquipo).valid) {
    errors.tamanoEquipo = 'Debe ser un número válido';
  }

  if (!validateRequired(data.clientesActuales).valid) {
    errors.clientesActuales = 'Clientes actuales es requerido';
  } else if (!validateNumber(data.clientesActuales).valid) {
    errors.clientesActuales = 'Debe ser un número válido';
  }

  // Sección 2: Sobre el Mercado
  if (!validateRequired(data.nichoSegmento).valid) {
    errors.nichoSegmento = 'Nicho/segmento es requerido';
  }

  if (!validateRequired(data.tamanoMercado).valid) {
    errors.tamanoMercado = 'Tamaño del mercado es requerido';
  }

  if (!validateRequired(data.tendenciasActuales).valid) {
    errors.tendenciasActuales = 'Tendencias actuales son requeridas';
  }

  // Sección 3: Sobre el Cliente Ideal
  if (!validateRequired(data.perfilDemografico).valid) {
    errors.perfilDemografico = 'Perfil demográfico es requerido';
  }

  if (!validateRequired(data.dondeSeEncuentran).valid) {
    errors.dondeSeEncuentran = 'Ubicación del cliente es requerida';
  }

  if (!validateRequired(data.comoTomaDecisiones).valid) {
    errors.comoTomaDecisiones = 'Proceso de decisión es requerido';
  }

  // Sección 4: Sobre la Competencia
  if (!validateRequired(data.competidoresTop).valid) {
    errors.competidoresTop = 'Competidores principales son requeridos';
  }

  if (!validateRequired(data.queHacenBien).valid) {
    errors.queHacenBien = 'Fortalezas de competidores son requeridas';
  }

  if (!validateRequired(data.queHacenMal).valid) {
    errors.queHacenMal = 'Debilidades de competidores son requeridas';
  }

  if (!validateRequired(data.diferenciacion).valid) {
    errors.diferenciacion = 'Diferenciación es requerida';
  }

  // Sección 5: Sobre Objetivos
  if (!validateRequired(data.objetivosPlazo).valid) {
    errors.objetivosPlazo = 'Plazo de objetivos es requerido';
  }

  if (!validateRequired(data.clientesNuevosObjetivo).valid) {
    errors.clientesNuevosObjetivo = 'Clientes nuevos objetivo es requerido';
  } else if (!validateNumber(data.clientesNuevosObjetivo).valid) {
    errors.clientesNuevosObjetivo = 'Debe ser un número válido';
  }

  if (!validateRequired(data.ingresosObjetivo).valid) {
    errors.ingresosObjetivo = 'Ingresos objetivo son requeridos';
  }

  if (!validateRequired(data.otrosObjetivos).valid) {
    errors.otrosObjetivos = 'Otros objetivos/KPIs son requeridos';
  }

  // Sección 6: Sobre los Dolores
  if (!validateRequired(data.mayorReto).valid) {
    errors.mayorReto = 'Mayor reto actual es requerido';
  }

  if (!validateRequired(data.queImpideCrecimiento).valid) {
    errors.queImpideCrecimiento = 'Obstáculos para crecer son requeridos';
  }

  if (!validateRequired(data.budgetDisponible).valid) {
    errors.budgetDisponible = 'Budget disponible es requerido';
  }

  if (!validateRequired(data.equipoDisponible).valid) {
    errors.equipoDisponible = 'Equipo disponible es requerido';
  }

  // Sección 7: Contacto
  if (!validateRequired(data.nombreContacto).valid) {
    errors.nombreContacto = 'Nombre de contacto es requerido';
  }

  if (!validateRequired(data.emailContacto).valid) {
    errors.emailContacto = 'Email es requerido';
  } else if (!validateEmail(data.emailContacto).valid) {
    errors.emailContacto = 'Email inválido';
  }

  if (!validateRequired(data.telefonoContacto).valid) {
    errors.telefonoContacto = 'Teléfono es requerido';
  } else if (!validatePhone(data.telefonoContacto).valid) {
    errors.telefonoContacto = 'Teléfono inválido (mínimo 10 dígitos)';
  }

  if (!validateRequired(data.mejorFormaContacto).valid) {
    errors.mejorFormaContacto = 'Forma de contacto es requerida';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
