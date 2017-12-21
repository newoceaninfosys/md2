"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AutocompleteDemo = (function () {
    function AutocompleteDemo() {
        this.isRequired = false;
        this.isDisabled = false;
        this.item = null;
        this.items = [
            { name: 'Vadodara', value: '1' },
            { name: 'Rajkot', value: '2' },
            { name: 'Delhi', value: '3' },
            { name: 'Chennai', value: '4' },
            { name: 'Mumbai', value: '5' },
            { name: 'Goa', value: '6' }
        ];
    }
    return AutocompleteDemo;
}());
AutocompleteDemo = __decorate([
    core_1.Component({
        selector: 'autocomplete-demo',
        templateUrl: '../autocomplete/autocomplete-demo.html'
    })
], AutocompleteDemo);
exports.AutocompleteDemo = AutocompleteDemo;
//# sourceMappingURL=autocomplete-demo.js.map