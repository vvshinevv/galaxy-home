import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseComponent } from './metaverse.component';

describe('MetaverseComponent', () => {
  let component: MetaverseComponent;
  let fixture: ComponentFixture<MetaverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
