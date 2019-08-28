import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Md2Datepicker, Md2DatepickerContent } from './datepicker.component';
import { Md2DatepickerToggle } from './datepicker-toggle';
import { Md2Calendar } from './calendar';
import { Md2MonthView } from './month-view';
import { Md2YearView } from './year-view';
import { Md2CalendarBody } from './calendar-body';
import { Md2Clock } from './clock';
import { DateLocale } from './date-locale';
import { DateUtil } from './date-util';
import { OverlayModule } from "../core/overlay/overlay-directives";
import { PortalModule } from "../core/portal/portal-directives";
import { StyleModule } from "../core/style/module";
import { A11yModule } from "../core/a11y/module";
import { MdNativeDateModule } from "../core/datetime/module";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    StyleModule,
    A11yModule,
    MdNativeDateModule
  ],
  exports: [
    Md2Datepicker,
    Md2DatepickerToggle,
    Md2Calendar,
    Md2CalendarBody,
    Md2Calendar,
    Md2MonthView,
    Md2YearView,
    Md2CalendarBody,
    Md2Clock,
  ],
  declarations: [
    Md2Datepicker,
    Md2DatepickerContent,
    Md2DatepickerToggle,
    Md2Calendar,
    Md2MonthView,
    Md2YearView,
    Md2CalendarBody,
    Md2Clock,
  ],
  providers: [DateLocale, DateUtil],
  entryComponents: [
    Md2DatepickerContent
  ]
})
export class Md2DatepickerModule { }
