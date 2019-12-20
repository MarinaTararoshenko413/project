import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'mt-custom-vertical-slider',
    templateUrl: './custom-vertical-slider.component.html',
    styleUrls: ['./custom-vertical-slider.component.sass']
})

export class CustomVerticalSliderComponent implements OnInit, AfterViewInit {
    @ViewChild('verticalSlider') sliderWrapper: ElementRef;

    sliderProps = {
        sliderWrapper: undefined,
        slider: undefined,
        accentItem: undefined,
        itemHeight: undefined,
        margin: undefined,
    };

    verticalSliderList = [
        {
            title: 'Cliente Anónimo',
            label: 'A',
            label_color: 'violet-1',
            company: 'Factura Electrónica',
            sub: 'Ventas del giro',
            price: '2.915',
            time: '14:28',
            number: 7813
        }, {
            title: 'Raúl Cancino F.',
            label: 'R',
            label_color: 'violet-2',
            company: 'Boleta Electrónica',
            price: '5.500',
            time: '16:45',
            number: 2915
        }, {
            title: 'Importaciones NEXO S.A.',
            label: 'N',
            label_color: 'violet-1',
            company: 'Nota de Crédito Electrónica',
            sub: 'Ventas activo fijo',
            price: '148.900',
            time: '17:23',
            number: 643
        }, {
            title: 'Haulmer spa',
            label: 'H',
            label_color: 'violet-3',
            company: 'Factura Exenta Electrónica',
            sub: 'Ventas del giro',
            price: '165.500',
            time: '09:38',
            number: 220
        }, {
            title: 'Restaurant Criollo',
            label: 'C',
            label_color: '',
            company: 'Liquidación Factura Electrónica',
            sub: 'Ventas del giro',
            price: '543.183',
            time: '10:15',
            number: 63
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.initCustomSlider();
        }, 100);
    }

    initCustomSlider() {
        const props = this.sliderProps;
        props.sliderWrapper = <HTMLElement>this.sliderWrapper.nativeElement;
        props.slider = <HTMLElement>props.sliderWrapper.getElementsByClassName('slider')[0];
        props.itemHeight = props.slider.children[0].clientHeight;
        props.slider.margin = window.innerWidth > 670 ? 14 : 10;

        setInterval(() => {
            this.transformSlider();
        }, 1000);
    }

    transformSlider() {
        const props = this.sliderProps;
        const slideToMove = props.slider.children[props.slider.children.length - 1].cloneNode(true);
        props.slider.insertBefore(slideToMove, props.slider.children[0]);

        for (let i = 0; i <= props.slider.children.length - 1; i++) {
            props.slider.children[0].style.transform = 'translateY(0) translateX(-50%) scale(1.1)';
            // tslint:disable-next-line:max-line-length
            props.slider.children[i].style.transform = 'translateY(' + 100 * i + '%) translateY(' + props.slider.margin * i + 'px) translateX(-50%)';
        }
        props.slider.children[props.slider.children.length - 1].remove();
    }
}
