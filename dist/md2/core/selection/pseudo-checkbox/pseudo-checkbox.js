var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, Input, ElementRef, Renderer2, } from '@angular/core';
import { mixinColor } from '../../common-behaviors/color';
// Boilerplate for applying mixins to MdChip.
var MdPseudoCheckboxBase = (function () {
    function MdPseudoCheckboxBase(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    return MdPseudoCheckboxBase;
}());
export { MdPseudoCheckboxBase };
export var _MdPseudoCheckboxBase = mixinColor(MdPseudoCheckboxBase, 'accent');
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with <md-checkbox> and should *not* be used if the user would directly interact
 * with the checkbox. The pseudo-checkbox should only be used as an implementation detail of
 * more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
var MdPseudoCheckbox = (function (_super) {
    __extends(MdPseudoCheckbox, _super);
    function MdPseudoCheckbox(elementRef, renderer) {
        var _this = _super.call(this, renderer, elementRef) || this;
        /** Display state of the checkbox. */
        _this.state = 'unchecked';
        /** Whether the checkbox is disabled. */
        _this.disabled = false;
        return _this;
    }
    return MdPseudoCheckbox;
}(_MdPseudoCheckboxBase));
__decorate([
    Input(),
    __metadata("design:type", String)
], MdPseudoCheckbox.prototype, "state", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdPseudoCheckbox.prototype, "disabled", void 0);
MdPseudoCheckbox = __decorate([
    Component({encapsulation: ViewEncapsulation.None,
        selector: 'md-pseudo-checkbox, mat-pseudo-checkbox',
        styles: ["@import '../../style/checkbox-common'; // Padding inside of a pseudo checkbox. $_mat-pseudo-checkbox-padding: $mat-checkbox-border-width * 2; // Size of the checkmark in a pseudo checkbox. $_mat-pseudo-checkmark-size: $mat-checkbox-size - (2 * $_mat-pseudo-checkbox-padding); .mat-pseudo-checkbox { width: $mat-checkbox-size; height: $mat-checkbox-size; border: $mat-checkbox-border-width solid; border-radius: 2px; cursor: pointer; display: inline-block; vertical-align: middle; box-sizing: border-box; position: relative; transition: border-color $mat-checkbox-transition-duration $mat-linear-out-slow-in-timing-function, background-color $mat-checkbox-transition-duration $mat-linear-out-slow-in-timing-function; // Used to render the checkmark/mixedmark inside of the box. &::after { position: absolute; opacity: 0; content: ''; border-bottom: $mat-checkbox-border-width solid currentColor; transition: opacity $mat-checkbox-transition-duration $mat-linear-out-slow-in-timing-function; } &.mat-pseudo-checkbox-checked, &.mat-pseudo-checkbox-indeterminate { border: none; } } .mat-pseudo-checkbox-disabled { cursor: default; } .mat-pseudo-checkbox-indeterminate::after { top: ($mat-checkbox-size - $mat-checkbox-border-width) / 2; left: $mat-checkbox-border-width; width: $mat-checkbox-size - ($mat-checkbox-border-width * 2); opacity: 1; } .mat-pseudo-checkbox-checked::after { top: ($mat-checkbox-size / 2) - ($_mat-pseudo-checkmark-size / 4) - ($mat-checkbox-size / 10); left: $_mat-pseudo-checkbox-padding - $mat-checkbox-border-width / 2; width: $_mat-pseudo-checkmark-size; height: ($_mat-pseudo-checkmark-size - $mat-checkbox-border-width) / 2; border-left: $mat-checkbox-border-width solid currentColor; transform: rotate(-45deg); opacity: 1; } "],
        inputs: ['color'],
        template: '',
        host: {
            'class': 'mat-pseudo-checkbox',
            '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
            '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
            '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        },
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], MdPseudoCheckbox);
export { MdPseudoCheckbox };
//# sourceMappingURL=pseudo-checkbox.js.map