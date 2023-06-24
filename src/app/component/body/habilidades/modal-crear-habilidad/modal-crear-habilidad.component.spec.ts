import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearHabilidadComponent } from './modal-crear-habilidad.component';

describe('ModalCrearHabilidadComponent', () => {
  let component: ModalCrearHabilidadComponent;
  let fixture: ComponentFixture<ModalCrearHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
