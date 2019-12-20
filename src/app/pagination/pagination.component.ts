import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'mt-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
    public itemsPerPage: number;
    public currentPage: number;
    public currentMin: number;
    public currentMax: number;
    public prevEnabled: boolean;
    public nextEnabled: boolean;
    public maxArr: number;

    public list = [
        {
            id: 1,
            name: 'Pack leche semidescremada Surlat 1 L, 6m...',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }, {
            id: 2,
            name: 'Mantequilla con sal Colun 250 g',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }, {
            id: 3,
            name: 'Yoghurt Soprole protein natural, 155 g',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }, {
            id: 4,
            name: 'Pack Probiótico frambuesa chamyto framb...',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }, {
            id: 5,
            name: 'Agua saborizada Mas pera sin gas 1.6 L',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }, {
            id: 6,
            name: 'Bebida Coca Cola Light 1.75 L, desechable',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }, {
            id: 7,
            name: 'Ítem 1',
            price: 9999999,
            quantity: 999,
            document_id: 2907362637281
        }, {
            id: 8,
            name: 'Agua saborizada Mas pera sin gas 1.6 L',
            price: 5000,
            quantity: 8,
            document_id: 2907362637281
        }, {
            id: 9,
            name: 'Pack leche semidescremada Surlat 1 L, 6m...',
            price: 5000,
            quantity: 1,
            document_id: 2907362637281
        }
    ];

    constructor() {
        this.maxArr = 0;
        this.currentMin = 0;
        this.currentMax = 0;
        this.currentPage = 0;
        this.nextEnabled = false;
        this.prevEnabled = false;
    }

    ngOnInit() {
        this.itemsPerPage = 7;
        this.maxArr = this.list.length;
        this._checkMinMax();
    }

    public prevItems() {
        this.currentPage--;
        this._checkMinMax();
    }

    public nextItems(): void {
        this.currentPage++;
        this._checkMinMax();
    }

    private _checkMinMax(): void {
        this.nextEnabled = false;
        this.prevEnabled = false;
        this.currentMin = this.itemsPerPage * this.currentPage;
        this.currentMax = this.itemsPerPage * (this.currentPage + 1);
        if (this.currentMax >= this.maxArr) {
            this.currentMax = this.maxArr;
        }

        if (this.currentMax > this.maxArr - 1) {
            this.nextEnabled = true;
        }

        if (this.currentMin < 1) {
            this.prevEnabled = true;
        }
    }
}
