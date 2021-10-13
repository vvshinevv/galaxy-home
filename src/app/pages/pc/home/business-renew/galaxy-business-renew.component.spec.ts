import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyBusinessRenewComponent } from './galaxy-business-renew.component';

describe('GalaxyBusinessRenewComponent', () => {
  let component: GalaxyBusinessRenewComponent;
  let fixture: ComponentFixture<GalaxyBusinessRenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyBusinessRenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyBusinessRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
