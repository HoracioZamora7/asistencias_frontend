import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaDelDiaComponent } from './asistencia-del-dia.component';

describe('AsistenciaDelDiaComponent', () => {
  let component: AsistenciaDelDiaComponent;
  let fixture: ComponentFixture<AsistenciaDelDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciaDelDiaComponent]
    });
    fixture = TestBed.createComponent(AsistenciaDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
