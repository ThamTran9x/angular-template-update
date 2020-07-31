import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentReactiveFormsComponent } from './assignment-reactive-forms.component';

describe('AssignmentReactiveFormsComponent', () => {
  let component: AssignmentReactiveFormsComponent;
  let fixture: ComponentFixture<AssignmentReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
