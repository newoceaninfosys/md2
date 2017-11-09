var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
var Md2CalendarCell = (function () {
    function Md2CalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return Md2CalendarCell;
}());
export { Md2CalendarCell };
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
var Md2CalendarBody = (function () {
    function Md2CalendarBody() {
        /** The number of columns in the table. */
        this.numCols = 7;
        /** Whether to allow selection of disabled cells. */
        this.allowDisabledSelection = false;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new EventEmitter();
    }
    Md2CalendarBody.prototype._cellClicked = function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(Md2CalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Md2CalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    return Md2CalendarBody;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], Md2CalendarBody.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], Md2CalendarBody.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Md2CalendarBody.prototype, "todayValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Md2CalendarBody.prototype, "selectedValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], Md2CalendarBody.prototype, "labelMinRequiredCells", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "numCols", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "allowDisabledSelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "activeCell", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "selectedValueChange", void 0);
Md2CalendarBody = __decorate([
    Component({selector: '[md2-calendar-body]',
        template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"md2-calendar-body-label\" [attr.colspan]=\"numCols\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"md2-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"md2-calendar-body-cell\" [class.md2-calendar-body-disabled]=\"!item.enabled\" [class.md2-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" (click)=\"_cellClicked(item)\"><div class=\"md2-calendar-body-cell-content\" [class.md2-calendar-body-selected]=\"selectedValue === item.value\" [class.md2-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
        styles: ["$primary: #106cc8 !default; $md2-calendar-body-font-size: 13px !default; $md2-calendar-body-header-font-size: 14px !default; $md2-calendar-body-label-padding-start: 5% !default; $md2-calendar-body-label-translation: -6px !default; $md2-calendar-body-cell-min-size: 32px !default; $md2-calendar-body-cell-size: 100% / 7 !default; $md2-calendar-body-cell-content-margin: 5% !default; $md2-calendar-body-cell-content-border-width: 1px !default; $md2-calendar-body-min-size: 7 * $md2-calendar-body-cell-min-size !default; $md2-calendar-body-cell-padding: $md2-calendar-body-cell-size / 2 !default; $md2-calendar-body-cell-content-size: 100% - $md2-calendar-body-cell-content-margin * 2 !default; $md2-datepicker-selected-today-box-shadow-width: 1px; .md2-calendar-body { font-size: $md2-calendar-body-font-size; min-width: $md2-calendar-body-min-size; } .md2-calendar-body-label { padding: $md2-calendar-body-cell-padding 0 $md2-calendar-body-cell-padding $md2-calendar-body-cell-padding; height: 0; line-height: 0; color: rgba(black, 0.54); transform: translateX($md2-calendar-body-label-translation); text-align: left; } .md2-calendar-body-cell { position: relative; width: $md2-calendar-body-cell-size; height: 0; line-height: 0; padding: $md2-calendar-body-cell-padding 0; text-align: center; outline: none; cursor: pointer; } .md2-calendar-body-disabled { cursor: default; pointer-events:none; } .md2-calendar-body-cell-content { position: absolute; top: $md2-calendar-body-cell-content-margin; left: $md2-calendar-body-cell-content-margin; display: flex; align-items: center; justify-content: center; box-sizing: border-box; width: $md2-calendar-body-cell-content-size; height: $md2-calendar-body-cell-content-size; color: rgba(black, 0.87); border-width: $md2-calendar-body-cell-content-border-width; border-style: solid; border-color: transparent; border-radius: 50%; .md2-calendar-body-disabled > &:not(.md2-calendar-body-selected) { color: rgba(black, 0.38); } } :not(.md2-calendar-body-disabled):hover, .md2-calendar:focus .md2-calendar-body-active { & > .md2-calendar-body-cell-content:not(.md2-calendar-body-selected) { background-color: rgba(black, 0.12); } } .md2-calendar-body-selected { background-color: $primary; color: white; } .md2-calendar-body-disabled > .md2-calendar-body-selected { background-color: rgba($primary, 0.4); } .md2-calendar-body-today { &:not(.md2-calendar-body-selected) { border-color: $primary; } &.md2-calendar-body-selected { box-shadow: inset 0 0 0 $md2-datepicker-selected-today-box-shadow-width md2-color($primary, default-contrast); } } .md2-calendar-body-disabled > .md2-calendar-body-today:not(.md2-calendar-body-selected) { border-color: rgba(black, 0.18); } [dir='rtl'] { .md2-calendar-body-label { padding: 0 $md2-calendar-body-cell-padding 0 0; transform: translateX(-$md2-calendar-body-label-translation); text-align: right; } } "],
        host: {
            'class': 'md2-calendar-body',
        },
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], Md2CalendarBody);
export { Md2CalendarBody };
//# sourceMappingURL=calendar-body.js.map