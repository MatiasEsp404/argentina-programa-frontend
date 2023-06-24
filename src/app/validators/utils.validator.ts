import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from 'moment';

export function menorIgualAFechaActual(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const fechaIngresada = moment.utc(control.value, 'YYYY-MM-DD')
      const fechaActual = moment.utc().startOf('day')
      if (fechaIngresada.isAfter(fechaActual)) {
        return { fechaNoValida: true }
      }
    }
    return null;
  }
}
