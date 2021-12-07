import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyAboutComponent } from './galaxy-about.component';

describe('GalaxyAboutComponent', () => {
  let component: GalaxyAboutComponent;
  let fixture: ComponentFixture<GalaxyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
