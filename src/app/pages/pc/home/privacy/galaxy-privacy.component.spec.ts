import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyPrivacyComponent } from './galaxy-privacy.component';

describe('GalaxyPrivacyComponent', () => {
  let component: GalaxyPrivacyComponent;
  let fixture: ComponentFixture<GalaxyPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
