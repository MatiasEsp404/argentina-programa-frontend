import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';
import { hastaPosteriorADesde, longitudMaxima, menorIgualAFechaActual } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-crear-trabajo',
  templateUrl: './crear-trabajo.component.html',
  styleUrls: ['./crear-trabajo.component.scss']
})
export class CrearTrabajoComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private estudioService: TrabajoService
  ) { }

  trabajoForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, longitudMaxima(64)]),
    empresa: new FormControl('', [Validators.required, longitudMaxima(64)]),
    descripcion: new FormControl('', [Validators.required, longitudMaxima(256)]),
    fechaDesde: new FormControl('', [Validators.required, menorIgualAFechaActual(), hastaPosteriorADesde()]),
    fechaHasta: new FormControl('', [Validators.required, menorIgualAFechaActual(), hastaPosteriorADesde()]),
  });
  errorBackend = ''

  ngOnInit(): void {
    this.trabajoForm.patchValue({
      descripcion: this.obtenerDescripcionAleatoria()
    });
  }

  obtenerDescripcionAleatoria() {
    const textos = [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam iure nisi corrupti libero amet voluptatem veniam voluptatum tempora commodi quo magnam optio fugit ad, aut eveniet facilis est quas.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur enim perspiciatis sapiente corrupti officiis sunt et, praesentium quod dignissimos totam magnam, sequi cumque unde! Vero illum nesciunt temporibus repellat expedita!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente possimus nemo odit repellat adipisci soluta quo commodi distinctio. Optio, soluta. Itaque impedit exercitationem possimus alias ipsum delectus eum animi!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla consequatur odio aut rem quasi dolorum exercitationem nam error. Accusantium accusamus dicta nostrum, deserunt animi odit. Sit eos illum tempora odio!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum mollitia qui? Repellat odio quos ea? Reprehenderit facere, id aliquid, aliquam explicabo optio vero aspernatur, expedita quaerat ratione doloribus autem.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum aspernatur debitis enim laudantium, et necessitatibus ipsa rem odio tempore aliquid, magni earum, maxime itaque quidem quisquam quis maiores ea.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta recusandae eum natus amet, repellendus tempora earum expedita minus id debitis? Repellendus quasi deleniti ut accusamus et tempora illum molestias!',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, molestiae. Aut aliquam voluptatum eos eveniet incidunt corporis omnis neque. Dolor est, facilis velit odio impedit sapiente aperiam laboriosam delectus eaque!',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, doloremque nobis quaerat eum, eligendi voluptate temporibus neque quas, itaque veritatis architecto! Ab molestiae magni ad aliquid ut, iste deleniti neque!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci necessitatibus accusantium eius assumenda reiciendis. Ipsam dicta consectetur veritatis numquam dolore quia tempora autem excepturi iste est, unde, non possimus.'
    ];
    const i = Math.floor(Math.random() * textos.length);
    return textos[i];
  }


  isInvalid(formControl: string) {
    let control = this.trabajoForm.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.trabajoForm.get(campo);
    if (control?.hasError('fechasInvalidas')) {
      return 'La fecha de contrato no puede ser posterior a la fecha de desvinculación';
    }
    if (control?.hasError('fechaNoValida')) {
      return 'La fecha debe ser menor o igual a la fecha actual';
    }
    if (control?.hasError('longitudExcedida')) {
      return 'Longitud máxima excedida';
    }
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async crearTrabajo() {
    try {
      await firstValueFrom(this.estudioService.crearTrabajo(this.obtenerRequest()))
      this.estudioService.recargarTrabajos.next();
      this.cancelar()
    } catch (error: any) {
      if (error.status == 401 || error.status == 400) {
        this.errorBackend = error.error.message
      } else {
        this.errorBackend = 'Error del servidor'
      }
    }
  }

  obtenerRequest(): Trabajo {
    const request: Trabajo = {
      titulo: this.trabajoForm.get('titulo')?.value!,
      empresa: this.trabajoForm.get('empresa')?.value!,
      fechaDesde: this.trabajoForm.get('fechaDesde')?.value!,
      fechaHasta: this.trabajoForm.get('fechaHasta')?.value!,
      descripcion: this.trabajoForm.get('descripcion')?.value!
    }
    return request;
  }

}
