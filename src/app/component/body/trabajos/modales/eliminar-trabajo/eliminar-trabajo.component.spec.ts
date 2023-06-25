import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTrabajoComponent } from './eliminar-trabajo.component';

describe('EliminarTrabajoComponent', () => {
  let component: EliminarTrabajoComponent;
  let fixture: ComponentFixture<EliminarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
