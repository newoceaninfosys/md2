"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DatepickerDemo = (function () {
    function DatepickerDemo() {
        this.isRequired = false;
        this.isDisabled = false;
        this.isOpenOnFocus = false;
        this.today = new Date();
        this._type = 'date';
        this.types = [
            { text: 'Date', value: 'date' },
            { text: 'Time', value: 'time' },
            { text: 'Month', value: 'month' },
            { text: 'Date Time', value: 'datetime' }
        ];
        this.mode = 'auto';
        this.modes = [
            { text: 'Auto', value: 'auto' },
            { text: 'Portrait', value: 'portrait' },
            { text: 'Landscape', value: 'landscape' }
        ];
        this.startView = 'month';
        this.startViews = [
            { text: 'Clock', value: 'clock' },
            { text: 'Month', value: 'month' },
            { text: 'Year', value: 'year' }
        ];
        this.customID = 'datepicker-id';
        this.dateFormat = null;
        this.dateFormatsDateTime = [
            { name: 'US:', value: 'M/d/y H:mm A' },
            { name: 'England:', value: 'dd/MM/y H:mm A' },
            { name: 'Poland:', value: 'd.MM.y HH:mm' },
            { name: 'Germany:', value: 'd.M.y HH:mm' },
            { name: 'France:', value: 'd/MM/y HH:mm' },
            { name: 'ISO 8601', value: 'y-MM-dd HH:mm' }
        ];
        this.dateFormatsDate = [
            { name: 'US:', value: 'M/d/y' },
            { name: 'England:', value: 'dd/MM/y' },
            { name: 'Poland:', value: 'd.MM.y' },
            { name: 'Germany:', value: 'd.M.y' },
            { name: 'France:', value: 'd/MM/y' },
            { name: 'ISO 8601', value: 'y-MM-dd' }
        ];
        this.dateFormatsTime = [
            { name: 'US:', value: 'H:mm A' },
            { name: 'England:', value: 'H:mm A' },
            { name: 'Poland:', value: 'HH:mm' },
            { name: 'Germany:', value: 'HH:mm' },
            { name: 'France:', value: 'HH:mm' },
            { name: 'ISO 8601', value: 'HH:mm' }
        ];
        this.dateFormatsMonth = [
            { name: 'US:', value: 'M/y' },
            { name: 'England:', value: 'MM/y' },
            { name: 'Poland:', value: 'MM.y' },
            { name: 'Germany:', value: 'M.y' },
            { name: 'France:', value: 'MM/y' },
            { name: 'ISO 8601', value: 'y-MM' }
        ];
        this.dateFormats = {
            'datetime': this.dateFormatsDateTime,
            'date': this.dateFormatsDate,
            'time': this.dateFormatsTime,
            'month': this.dateFormatsMonth
        };
        this.dateFilter = function (date) { return date.getMonth() % 2 == 1 && date.getDate() % 2 == 0; };
    }
    Object.defineProperty(DatepickerDemo.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            this.dateFormat = null;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerDemo.prototype.setDate = function () {
        this.date = new Date(this.today);
    };
    return DatepickerDemo;
}());
DatepickerDemo = __decorate([
    core_1.Component({
        selector: 'datepicker-demo',
        templateUrl: '../datepicker/datepicker-demo.html',
        styles: ["\n    .inline-control {\n      display: inline-block;\n      width: 150px;\n      margin-right: 16px;\n      padding: 16px 0;\n      vertical-align: top;\n    }\n  ",
            ".error-helper {\n      color: #dd2c00;\n    }\n  "]
    })
], DatepickerDemo);
exports.DatepickerDemo = DatepickerDemo;
//# sourceMappingURL=datepicker-demo.js.map