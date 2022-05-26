import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

import { RouterTestingModule } from '@angular/router/testing'

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not give error when running showLoginButton()', () => {
    expect(function () {
      component.showLoginButton();
    }).not.toThrowError();
  });

  it('should change isVisible to true when set to false and running showLoginButton', () => {
    component.isVisible = false;
    component.showLoginButton();
    expect(component.isVisible).toBeTrue();
  });
});
