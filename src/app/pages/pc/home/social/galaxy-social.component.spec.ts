import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxySocialComponent } from './galaxy-social.component';

describe('GalaxySocialComponent', () => {
  let component: GalaxySocialComponent;
  let fixture: ComponentFixture<GalaxySocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxySocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxySocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
