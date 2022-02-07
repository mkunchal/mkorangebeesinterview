import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedComponent } from './shared.component';

describe('SharedComponent', () => {
  // let component: InputComponent;
  // let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ SharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(SharedComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-lazy-load', () => {
    const fixture = TestBed.createComponent(SharedComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
