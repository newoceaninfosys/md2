import { NgModule } from "@angular/core";
import {
  CdkMonitorFocus,
  FOCUS_ORIGIN_MONITOR_PROVIDER
} from "./focus-origin-monitor";
import { PlatformModule } from "../platform/module";

@NgModule({
  imports: [PlatformModule],
  declarations: [CdkMonitorFocus],
  exports: [CdkMonitorFocus],
  providers: [FOCUS_ORIGIN_MONITOR_PROVIDER]
})
export class StyleModule {}
