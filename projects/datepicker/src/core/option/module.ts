import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MdRippleModule } from "../ripple/module";
import { MdSelectionModule } from "../selection/module";
import { MdOption } from "./option";
import { MdOptgroup } from "./optgroup";

@NgModule({
  imports: [MdRippleModule, CommonModule, MdSelectionModule],
  exports: [MdOption, MdOptgroup],
  declarations: [MdOption, MdOptgroup]
})
export class MdOptionModule {}
