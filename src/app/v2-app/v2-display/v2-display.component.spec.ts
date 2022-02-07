import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2DisplayComponent } from './v2-display.component';

describe('V2DisplayComponent', () => {
  let component: V2DisplayComponent;
  let fixture: ComponentFixture<V2DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2DisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
