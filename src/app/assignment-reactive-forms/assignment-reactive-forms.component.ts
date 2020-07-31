import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-reactive-forms',
  templateUrl: './assignment-reactive-forms.component.html',
  styleUrls: ['./assignment-reactive-forms.component.css'],
})
export class AssignmentReactiveFormsComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  signUpForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenProjectName], this.asyncValidator),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  forbiddenProjectName(control: FormControl): {[a: string]: boolean} {
    if (control.value === 'Test') {
      return {'isForbiddenName': true};
    }
    return null;
  }

  //async validator
  asyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test2') {
          resolve({ 'isForbiddenName': true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
