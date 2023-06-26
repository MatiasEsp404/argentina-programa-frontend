import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosBasicosComponent } from './modificar-datos-basicos.component';

describe('ModificarDatosBasicosComponent', () => {
  let component: ModificarDatosBasicosComponent;
  let fixture: ComponentFixture<ModificarDatosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosBasicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarDatosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
