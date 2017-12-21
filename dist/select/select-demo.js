"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectDemo = (function () {
    function SelectDemo() {
        this.isRequired = false;
        this.isDisabled = false;
        this._search = '';
        this.item = null;
        this.pokemonRequired = false;
        this.pokemonDisabled = false;
        this.items = [
            { name: 'Vadodara', value: '1' },
            { name: 'Rajkot', value: '2' },
            { name: 'Delhi', value: '3' },
            { name: 'Chennai', value: '4' },
            { name: 'Mumbai', value: '5' },
            { name: 'Goa', value: '6' }
        ];
        this.pokemon = [
            { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
            { value: 'charizard-1', viewValue: 'Charizard' },
            { value: 'squirtle-2', viewValue: 'Squirtle' },
            { value: 'pikachu-3', viewValue: 'Pikachu' },
            { value: 'eevee-4', viewValue: 'Eevee' },
            { value: 'ditto-5', viewValue: 'Ditto' },
            { value: 'psyduck-6', viewValue: 'Psyduck' },
        ];
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    SelectDemo.prototype.setPokemonValue = function () {
        this.currentPokemon = ['eevee-4', 'psyduck-6'];
    };
    return SelectDemo;
}());
SelectDemo = __decorate([
    core_1.Component({
        selector: 'select-demo',
        templateUrl: '../select/select-demo.html',
        styleUrls: ['../select/select-demo.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], SelectDemo);
exports.SelectDemo = SelectDemo;
//# sourceMappingURL=select-demo.js.map