import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: any = {};
onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  // data = {
  //   inputDateHiredLabel: "Date Hired",
  //   inputDateHiredData: new Date("01/16/2020")
  // }
  //   myFunction(form: NgForm) {
  //     alert(form.value.inputDateHiredData);
  //     console.log(form.value);
  //   }
  }

