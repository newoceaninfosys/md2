import { NgModule } from "@angular/core";
import { MdRipple } from "./ripple";
import { MdCommonModule } from "../common-behaviors/common-module";
import { VIEWPORT_RULER_PROVIDER } from "../overlay/position/viewport-ruler";
import { ScrollDispatchModule } from "../overlay/scroll/index";
import { PlatformModule } from "../platform/module";

@NgModule({
  imports: [MdCommonModule, PlatformModule, ScrollDispatchModule],
  exports: [MdRipple, MdCommonModule],
  declarations: [MdRipple],
  providers: [VIEWPORT_RULER_PROVIDER]
})
export class MdRippleModule {}
