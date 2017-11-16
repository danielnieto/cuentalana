import { Component } from '@angular/core';
import { Denomination } from './denomination';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    bills: Array < Denomination > = [
        new Denomination(1000, 0),
        new Denomination(500, 0),
        new Denomination(200, 0),
        new Denomination(100, 0),
        new Denomination(50, 0),
        new Denomination(20, 0)
    ];

    coins: Array < Denomination > = [
        new Denomination(50, 0),
        new Denomination(20, 0),
        new Denomination(10, 0),
        new Denomination(5, 0),
        new Denomination(2, 0),
        new Denomination(1, 0),
        new Denomination(0.5, 0),
        new Denomination(0.2, 0),
        new Denomination(0.1, 0),
        new Denomination(0.05, 0)
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
