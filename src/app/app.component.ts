import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userForm: FormGroup;

  constructor(){
    this.userForm = new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl()

    })
  }
}
