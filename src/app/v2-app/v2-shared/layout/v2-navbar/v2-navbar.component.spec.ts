import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { MatIconHarness } from '@angular/material/icon/testing';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { V2NavbarComponent } from './v2-navbar.component';

describe('V2NavbarComponent', () => {
  let component: V2NavbarComponent;
  let fixture: ComponentFixture<V2NavbarComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2NavbarComponent ]
    })
    .compileComponents();
    
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should work icons', async () => {
    const matToolbar = await loader.getHarness(MatToolbarHarness.with({selector: '.v2-navbar'}));
    const homeButton = await loader.getHarness(MatButtonHarness.with({selector: '#v2-home-navbar-button'}));
    const createButton = await loader.getHarness(MatButtonHarness.with({selector: '#v2-create-navbar-button'}));
    const homeIcon = await loader.getHarness(MatIconHarness.with({selector: '#v2-create-navbar-icon'}));
    const createIcon = await loader.getHarness(MatIconHarness.with({selector: '#v2-create-navbar-icon'}));
  });

  /*it('should mark clicked when home button clicked', async () => {
    const homeButton = await loader.getHarness(MatButtonHarness.with({selector: '#v2-home-navbar-button'}));
    expect(fixture.componentInstance.confirmed).toBe(false);
    expect(await okButton.isDisabled()).toBe(false);
  });
  */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
