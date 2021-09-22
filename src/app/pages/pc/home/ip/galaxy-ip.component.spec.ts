import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyIpComponent } from './galaxy-ip.component';

describe('GalaxyIpComponent', () => {
  let component: GalaxyIpComponent;
  let fixture: ComponentFixture<GalaxyIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
