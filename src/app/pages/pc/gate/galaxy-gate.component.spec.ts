import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyGateComponent } from './galaxy-gate.component';

describe('GalaxyGateComponent', () => {
  let component: GalaxyGateComponent;
  let fixture: ComponentFixture<GalaxyGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
