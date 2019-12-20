import { Component, OnInit} from '@angular/core';

export interface PeriodicElement {
    name: string;
    price: number;
    date: string;
    code: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'mt-example-table',
    templateUrl: './example-table.component.html',
    styleUrls: ['./example-table.component.sass']
})
export class ExampleTableComponent implements OnInit {


    ELEMENT_DATA: PeriodicElement[] = [
        { name: 'Producto prueba 3', price: 23234231, date: '2019-09-11 17:16:02', code: 1231231221, weight: 1.0079, symbol: 'H' },
        { name: 'NECTAR WATTS BOT PIÑA LIGHT 1 LTS', price: 56534565, date: '2019-09-11 17:16:02', code: 324231231221, weight: 4.0026, symbol: 'He' },
        { name: 'CERVEZA TECATE BOT 4.5¦ 355 CC', price: 56534233, date: '2019-09-11 17:16:02', code: 56231221, weight: 6.941, symbol: 'Li' },
        { name: 'Beryllium', price: 56534234, date: '2019-09-11 17:16:02', code: 891231221, weight: 9.0122, symbol: 'Be' },
        { name: 'Boron', price: 44445, date: '2019-09-11 17:16:02', code: 5221, weight: 10.811, symbol: 'B' },
        { name: 'Carbon', price: 43234236, date: '2019-09-11 17:16:02', code: 987665221, weight: 12.0107, symbol: 'C' },
        { name: 'Nitrogen', price: 34237, date: '2019-09-11 17:16:02', code: 446231221, weight: 14.0067, symbol: 'N' },
        { name: 'Oxygen', price: 234238, date: '2019-09-11 17:16:02', code: 9764231221, weight: 15.9994, symbol: 'O' },
        { name: 'Fluorine', price: 23234239, date: '2019-09-11 17:16:02', code: 87231221, weight: 18.9984, symbol: 'F' },
        { name: 'Neon', price: 23230, date: '2019-09-11 17:16:02', code: 3451231221, weight: 20.1797, symbol: 'Ne' },
    ];

    displayedColumns = ['name', 'price', 'date', 'code', 'weight', 'symbol'];
    dataSource = this.ELEMENT_DATA;

    constructor() {
    }

    ngOnInit() {
    }

    setSizeColumn(number) {
        return {'width': + number + 'px;'};
    }
}
