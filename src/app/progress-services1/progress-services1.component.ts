import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'mt-progress-services',
    templateUrl: './progress-services1.component.html',
    styleUrls: ['./progress-services1.component.sass']
})
export class ProgressServicesComponent implements OnInit {
    @ViewChild('progressServices') progressServices: ElementRef;

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.animateServices();
        }, 1000);
    }

    // START animation Services
    animateServices() {
        const services = this.progressServices.nativeElement;
        let i = 1;

        setInterval(() => {
            services.className = '';
            services.classList.add('step-' + i);
            i = i <= 5 ? i + 1 : 1;

            setTimeout(() => {
                services.className = '';
                services.classList.add('step-7');
            }, 500);
        }, 1000);
    }
}
