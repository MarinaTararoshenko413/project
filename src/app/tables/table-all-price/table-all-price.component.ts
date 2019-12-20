import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'mt-table-all-price',
    templateUrl: './table-all-price.component.html',
    styleUrls: ['./table-all-price.component.sass']
})

export class TableAllPriceComponent implements OnInit {

    isTablet: boolean = false;
    currencyPeriod;
    currencyData = 1;

    dataTablePrice = {
        table_header: [
            'Valores en Pesos Chilenos',
            '1 Año',
            '2 Años',
            '3 Años',
            '4 Años',
            '5 Años'
        ],
        table_body: [
            {
                name: '.CL',
                price_period_1: '7490',
                price_period_2: '14980',
                price_period_3: '22470',
                price_period_4: '29960',
                price_period_5: '37450'
            }, {
                name: '.PE',
                price_period_1: '33000',
                price_period_2: '66000',
                price_period_3: '99000'
            }, {
                name: '.COM.PE',
                price_period_1: '33000',
                price_period_2: '66000',
                price_period_3: '99000'
            }, {
                name: '.NET.PE',
                price_period_1: '33000',
                price_period_2: '66000',
                price_period_3: '99000'
            }, {
                name: '.CO (Colombia)',
                price_period_1: '18000',
                price_period_2: '36000',
                price_period_3: '54000'
            }, {
                name: '.COM.CO',
                price_period_1: '10000',
                price_period_2: '20000',
                price_period_3: '30000'
            }, {
                name: '.NET.CO',
                price_period_1: '10000',
                price_period_2: '20000',
                price_period_3: '30000'
            }, {
                name: '.COM.AR',
                price_period_1: '20000',
                price_period_2: '40000',
                price_period_3: '60000'
            }, {
                name: '.COM.MX',
                price_period_1: '10000',
                price_period_2: '20000',
                price_period_3: '30000'
            }, {
                name: '.COM.BR',
                price_period_1: '10000',
                price_period_2: '20000',
                price_period_3: '30000'
            }, {
                name: '.COM',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }, {
                name: '.ORG',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }, {
                name: '.NET',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }, {
                name: '.PRO',
                price_period_1: '12000',
                price_period_2: '24000',
                price_period_3: '36000'
            }, {
                name: '.LTDA',
                price_period_1: '30000',
                price_period_2: '60000',
                price_period_3: '90000'
            }, {
                name: '.IO',
                price_period_1: '30000',
                price_period_2: '60000',
                price_period_3: '90000'
            }, {
                name: '.BLOG',
                price_period_1: '20000',
                price_period_2: '40000',
                price_period_3: '60000'
            }, {
                name: '.US',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }, {
                name: '.INFO',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }, {
                name: '.NAME',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }, {
                name: '.TV',
                price_period_1: '20000',
                price_period_2: '40000',
                price_period_3: '60000'
            }, {
                name: '.BIZ',
                price_period_1: '7900',
                price_period_2: '15800',
                price_period_3: '23700',
                price_period_4: '31600',
                price_period_5: '39500'
            }
        ]
    };

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.isTablet = window.innerWidth <= 992 ? true : false;
    }

    constructor() {
    }

    ngOnInit() {
        this.isTablet = window.innerWidth <= 992 ? true : false;
        this.currencyPeriod = this.dataTablePrice.table_header[1];
    }

    selectedPeriod(selectedPeriod, index) {
        this.currencyPeriod = selectedPeriod;
        this.currencyData = index;
    }

    goToUrl(url: string): void {
        window.open(url, '_blank');
    }
}
