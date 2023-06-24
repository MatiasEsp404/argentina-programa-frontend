import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstudioComponent } from './eliminar-estudio.component';

describe('EliminarEstudioComponent', () => {
  let component: EliminarEstudioComponent;
  let fixture: ComponentFixture<EliminarEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
