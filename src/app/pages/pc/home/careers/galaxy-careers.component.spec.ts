import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyCareersComponent } from './galaxy-careers.component';

describe('GalaxyCareersComponent', () => {
  let component: GalaxyCareersComponent;
  let fixture: ComponentFixture<GalaxyCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
