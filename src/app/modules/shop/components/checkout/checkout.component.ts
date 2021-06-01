import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkautForm: FormGroup;
  fieldTel;
  fieldEmail;

  constructor() {
    this.checkautForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.required,  Validators.pattern('[0-9]{11}')]),
      email: new FormControl('', [Validators.required,  Validators.email])
    });
  }

  ngOnInit(): void {

    this.checkautForm.controls.email.valueChanges.subscribe((value) => {
      this.fieldEmail = value;
    });
    this.checkautForm.controls.tel.valueChanges.subscribe((value) => {
      this.fieldTel = value;
    });
  }

  // tslint:disable-next-line:typedef
  submitAction(event: any) {
   // event.preventDefault();
    console.log('LOG ===', this.checkautForm.value);
  }
}
