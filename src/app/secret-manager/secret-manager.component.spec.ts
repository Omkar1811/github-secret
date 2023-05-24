import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretManagerComponent } from './secret-manager.component';

describe('SecretManagerComponent', () => {
  let component: SecretManagerComponent;
  let fixture: ComponentFixture<SecretManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
