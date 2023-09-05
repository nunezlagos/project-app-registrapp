import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoasitenciaPage } from './listadoasitencia.page';

describe('ListadoasitenciaPage', () => {
  let component: ListadoasitenciaPage;
  let fixture: ComponentFixture<ListadoasitenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoasitenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
