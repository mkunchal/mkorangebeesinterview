import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  // let component: InputComponent;
  // let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        FormBuilder
      ],
      declarations: [ InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(InputComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-lazy-load', () => {
    const fixture = TestBed.createComponent(InputComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
