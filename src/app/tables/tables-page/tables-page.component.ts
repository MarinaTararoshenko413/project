import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mt-tables-page',
    templateUrl: './tables-page.component.html',
    styleUrls: ['./tables-page.component.sass']
})
export class TablesPageComponent implements OnInit {
    navTable = [
        {
            id: 1,
            name: 'responsive',
            title: 'Responsive',
            color: 'accent'
        }, {
            id: 2,
            name: 'custom-size',
            title: 'Custom size',
            color: 'accent-second'
        }
    ];

    constructor(
    ) { }

    ngOnInit() {
    }

}
