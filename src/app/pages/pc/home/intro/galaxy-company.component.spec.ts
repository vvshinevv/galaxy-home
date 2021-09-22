import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyCompanyComponent } from './galaxy-company.component';

describe('GalaxyCompanyComponent', () => {
  let component: GalaxyCompanyComponent;
  let fixture: ComponentFixture<GalaxyCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
