import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJustificacionPageComponent } from './crear-justificacion-page.component';

describe('CrearJustificacionPageComponent', () => {
  let component: CrearJustificacionPageComponent;
  let fixture: ComponentFixture<CrearJustificacionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearJustificacionPageComponent]
    });
    fixture = TestBed.createComponent(CrearJustificacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
