import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InicioalumnoPage } from './inicioalumno.page';

describe('InicioalumnoPage', () => {
  let component: InicioalumnoPage;
  let fixture: ComponentFixture<InicioalumnoPage>;

  beforeEach(Async(() => {
    fixture = TestBed.createComponent(InicioalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
