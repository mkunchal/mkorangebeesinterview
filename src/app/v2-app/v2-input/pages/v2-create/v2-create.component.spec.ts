import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2CreateComponent } from './v2-create.component';

describe('V2CreateComponent', () => {
  let component: V2CreateComponent;
  let fixture: ComponentFixture<V2CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2CreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
