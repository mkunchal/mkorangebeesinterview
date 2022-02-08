import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2DetailComponent } from './v2-detail.component';

describe('V2DetailComponent', () => {
  let component: V2DetailComponent;
  let fixture: ComponentFixture<V2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
