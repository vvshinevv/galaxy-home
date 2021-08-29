import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyHomeComponent } from './galaxy-home.component';

describe('GalaxyHomeComponent', () => {
  let component: GalaxyHomeComponent;
  let fixture: ComponentFixture<GalaxyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
