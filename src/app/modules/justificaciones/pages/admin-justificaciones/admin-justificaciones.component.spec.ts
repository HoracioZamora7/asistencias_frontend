import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJustificacionesComponent } from './admin-justificaciones.component';

describe('AdminJustificacionesComponent', () => {
  let component: AdminJustificacionesComponent;
  let fixture: ComponentFixture<AdminJustificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJustificacionesComponent]
    });
    fixture = TestBed.createComponent(AdminJustificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
