import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assigment-forms',
  templateUrl: './assigment-forms.component.html',
  styleUrls: ['./assigment-forms.component.css']
})
export class AssigmentFormsComponent implements OnInit {
  subscription = 'advanced';
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
    }
  }
}
