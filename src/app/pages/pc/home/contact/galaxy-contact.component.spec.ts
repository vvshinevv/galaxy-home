import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyContactComponent } from './galaxy-contact.component';

describe('GalaxyContactComponent', () => {
  let component: GalaxyContactComponent;
  let fixture: ComponentFixture<GalaxyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
