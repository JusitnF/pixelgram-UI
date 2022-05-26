import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true for blank username', () => {
    component.userControl.setValue("");
    expect(component.usernameEmpty()).toBeTrue();

    component.userControl.setValue("   ");
    expect(component.usernameEmpty()).toBeTrue();
  });

  it('should return false for non-blank username', () => {
    component.userControl.setValue("Not blank");
    expect(component.usernameEmpty()).toBeFalse();
  });

  it('should return true for blank password', () => {
    component.passControl.setValue("");
    expect(component.passwordEmpty()).toBeTrue();

    component.passControl.setValue("   ");
    expect(component.passwordEmpty()).toBeTrue();
  });

  it('should return false for non-blank password', () => {
    component.passControl.setValue("Not blank");
    expect(component.passwordEmpty()).toBeFalse();
  });
});
