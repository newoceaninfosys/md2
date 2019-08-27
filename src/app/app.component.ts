import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Custom MD2";
  public frm: FormGroup;
  public today = new Date();
  public startAt = new Date(new Date().setDate(new Date().getDate() + 1));
  public max = new Date(new Date().setMonth(new Date().getMonth() + 1));
  constructor() {
    this.frm = new FormGroup({
      date: new FormControl(new Date(), [Validators.required])
    });

    this.frm.valueChanges.subscribe(values => {
      console.log('Values', values);
    });
  }

  public onDateChange(event){
    console.log('onDateChange', event);
  }
}
