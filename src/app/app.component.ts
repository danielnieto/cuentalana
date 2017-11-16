import { Component } from '@angular/core';
import { Denomination } from './denomination';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    bills: Array < Denomination > = [
        new Denomination(1000, null),
        new Denomination(500, null),
        new Denomination(200, null),
        new Denomination(100, null),
        new Denomination(50, null),
        new Denomination(20, null)
    ];

    coins: Array < Denomination > = [
        new Denomination(50, null),
        new Denomination(20, null),
        new Denomination(10, null),
        new Denomination(5, null),
        new Denomination(2, null),
        new Denomination(1, null),
        new Denomination(0.5, null),
        new Denomination(0.2, null),
        new Denomination(0.1, null),
        new Denomination(0.05, null)
    ];


    sum(): number {
        let billsSum = 0;

        this.bills.forEach(denomination => {
            billsSum += denomination.value * denomination.quantity;
        });

        let coinsSum = 0;

        this.coins.forEach(denomination => {
            coinsSum += denomination.value * denomination.quantity;
        });

        return billsSum + coinsSum;
    }

}
