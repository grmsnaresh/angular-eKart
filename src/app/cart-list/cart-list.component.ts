import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
@Component({
selector:'app-cart-list',
templateUrl:'./cart-list.component.html'
})
export class CartListComponent implements OnInit {
    constructor() {}
    ngOnInit() {
    console.log('inside init');
    }
}