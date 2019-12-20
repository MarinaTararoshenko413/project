import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    numberCount = 0;
    speed = 7;
    endCounter = 41169;
    startCounter = 0;
    timer = 0;

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.animateNumber();
        }, 100);
    }

    animateNumber() {
        for (let i = 0; i <= this.speed * 100; i++) {
            if (this.startCounter < this.endCounter) {
                this.startCounter++;
                this.numberCount = this.startCounter;
            }
        }

        if (this.timer++ <= this.endCounter / this.speed) {
            requestAnimationFrame(() => {
                this.animateNumber();
            });
        }
    }

}
