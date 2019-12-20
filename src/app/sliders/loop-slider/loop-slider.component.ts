import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'mt-loop-slider',
    templateUrl: './loop-slider.component.html',
    styleUrls: ['./loop-slider.component.sass']
})

export class LoopSliderComponent implements OnInit, AfterViewInit {
    @ViewChild('slider') slider: ElementRef;
    current = 0;

    sliderList = [
        {
            id: 1,
            // tslint:disable-next-line:max-line-length
            text: 'Gracias a los muchos años de buen servicio que me han brindado en mis sitios personales, definitivamente me quedo y recomiendo sin dudas a Solucionhost. Me han dado una atención buena y rápida, además de responder a mis dudas eficientemente.',
            name: 'Daniel Casagrande'
        }, {
            id: 2,
            // tslint:disable-next-line:max-line-length
            text: 'De estos 3 años con SolucionHost, lo que más me ha gustado es la estabilidad de sus servidores.De verdad, ha sido todo un agrado poder estar tranquilos con nuestros sitios, gracias al buen servicio que dan.',
            name: 'Cristobal Montecinos'
        }, {
            id: 3,
            // tslint:disable-next-line:max-line-length
            text: 'Muchas gracias por la atención amable y profesional que me han brindado.Nunca he pasado un mal rato con Uds.Muy conforme con mi experiencia y feliz de haber confiado en su servicio.',
            name: 'David Gallardo'
        }, {
            id: 4,
            // tslint:disable-next-line:max-line-length
            text: 'Me recomendaron su servicio y definitivamente fue un buen dato.Mi experiencia como usuaria ha sido muy buena y la migración de mi sitio fue sencilla y super rápida.¡¡Muchas gracias por el buen trabajo!!',
            name: 'Camila Mori'
        }
    ];

    constructor(
        @Inject(PLATFORM_ID) private platformId: any
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.initSliderLoop();
            }, 100);
        }
    }

    initSliderLoop() {
        setInterval(() => {
            const sliderItems = this.slider.nativeElement.getElementsByClassName('item');

            if (this.current < sliderItems.length - 1) {
                this.current++;
            } else {
                this.current = 0;
            }

            for (let i = 0; i <= sliderItems.length - 1; i++) {
                sliderItems[i].style.opacity = '0';
                sliderItems[i].getElementsByClassName('inner')[0].style.transform = 'scale(0)';
            }

            if (this.current > 0) {
                sliderItems[this.current - 1].style.opacity = '0';
                sliderItems[this.current - 1].getElementsByClassName('inner')[0].style.transform = 'scale(0)';
            } else {
                sliderItems[0].style.opacity = '0';
                sliderItems[0].getElementsByClassName('inner')[0].style.transform = 'scale(0)';
            }

            setTimeout(() => {
                sliderItems[this.current].style.opacity = '1';
                sliderItems[this.current].getElementsByClassName('inner')[0].style.transform = 'scale(1,1)';
            }, 100);
        }, 1000);
    }

}
