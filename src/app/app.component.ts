import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './comn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pggg1';

  form: FormGroup = new FormGroup({});

  // first_name: any = '';
  // last_name: any = '';

  alert: boolean = false;

  constructor(private common: CommonService
   ) {
    this.form = new FormGroup({
      usn: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      console.log('ERROR');
      this.alert = true;
      // this.first_name = '';
      // this.last_name = '';
    } else {
      console.log(this.form.value);
      this.common.create_user(this.form.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}