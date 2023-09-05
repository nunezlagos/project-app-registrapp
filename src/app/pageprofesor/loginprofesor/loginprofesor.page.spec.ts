import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginprofesorPage } from './loginprofesor.page';

describe('LoginprofesorPage', () => {
  let component: LoginprofesorPage;
  let fixture: ComponentFixture<LoginprofesorPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoginprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
