import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTrabajoComponent } from './modificar-trabajo.component';

describe('ModificarTrabajoComponent', () => {
  let component: ModificarTrabajoComponent;
  let fixture: ComponentFixture<ModificarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
