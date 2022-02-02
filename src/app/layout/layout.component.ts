import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {}

  ngOnInit(): void {}

  public isInvalidField(control: string): boolean {
    let field = this.myForm.controls[control];
    return field.touched && field.invalid;
  }

  public isRequiredField(control: string): boolean {
    let field = this.myForm.controls[control];
    return field.errors['required'];
  }

  public isNotEmail(): boolean {
    return this.myForm.controls['email'].errors['email'];
  }

  public onSubmit(): void {
    console.log(this.myForm.value);
  }
}
