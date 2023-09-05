import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioprofesorPage } from './inicioprofesor.page';

describe('InicioprofesorPage', () => {
  let component: InicioprofesorPage;
  let fixture: ComponentFixture<InicioprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
