import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): any {
  const validationErros: Errors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErros[error.path] = error.message;
    }
  });

  return validationErros;
}
