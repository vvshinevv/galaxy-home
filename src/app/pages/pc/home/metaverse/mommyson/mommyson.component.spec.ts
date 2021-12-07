import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MommysonComponent } from './mommyson.component';

describe('MommysonComponent', () => {
  let component: MommysonComponent;
  let fixture: ComponentFixture<MommysonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MommysonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MommysonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
