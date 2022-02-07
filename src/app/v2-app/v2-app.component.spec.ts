import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2AppComponent } from './v2-app.component';

describe('V2AppComponent', () => {
  let component: V2AppComponent;
  let fixture: ComponentFixture<V2AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
