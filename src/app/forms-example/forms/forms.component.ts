import { Component, OnInit} from '@angular/core';
import { CurrencyFormatPipe } from '../../shared/pipe/currency.pipe';

@Component({
    selector: 'mt-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
    buttonsList = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    btnList = [
        {
            id: 1,
            value: 10,
            color: '#1984f6'
        }, {
            id: 2,
            value: 20,
            color: '#1984f6'
        }, {
            id: 3,
            value: 100,
            color: '#1984f6'
        }, {
            id: 4,
            value: 500,
            color: '#1984f6'
        }, {
            id: 5,
            value: 1000,
            color: '#1984f6'
        }
    ];

    colors = [
        'pink',
        'green',
        'red',
        'blue',
        'yellow'
    ];

    paymentAmount: string;
    payment: number = 0;

    constructor(
        private currencyFormat: CurrencyFormatPipe
    ) {
    }

    ngOnInit() {
    }

    selectedBtn(sum: string, id: string): void {
        this.payment = Number(sum) + this.payment;
        this.paymentAmount = this.currencyFormat.transform(this.payment, null);
        this.btnList[+id - 1].color = this.getRandColor();
        this.buttonsList[id]++;

    }

    getRandColor() {
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }
}
