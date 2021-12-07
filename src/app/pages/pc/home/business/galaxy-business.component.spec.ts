import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyBusinessComponent } from './galaxy-business.component';

describe('GalaxyBusinessComponent', () => {
  let component: GalaxyBusinessComponent;
  let fixture: ComponentFixture<GalaxyBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
