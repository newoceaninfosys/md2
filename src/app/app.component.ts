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
