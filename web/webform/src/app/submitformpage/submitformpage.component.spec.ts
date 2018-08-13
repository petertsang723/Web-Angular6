import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitformpageComponent } from './submitformpage.component';

describe('SubmitformpageComponent', () => {
  let component: SubmitformpageComponent;
  let fixture: ComponentFixture<SubmitformpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitformpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
