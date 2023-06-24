import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function menorIgualAFechaActual(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const fechaIngresada = new Date(control.value)
      const fechaActual = new Date()
      if (fechaIngresada > fechaActual) {
        return { fechaNoValida: true }
      }
    }
    return null;
  }
}
