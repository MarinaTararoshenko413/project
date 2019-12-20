import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'mt-bulletin-issue',
    templateUrl: './bulletin-issue.component.html',
    styleUrls: ['./bulletin-issue.component.sass']
})
export class BulletinIssueComponent implements OnInit {
    @ViewChild('sliderBallot') sliderBallot: ElementRef;

    // animation slider cards
    stepCol1Picture1 = 0;
    stepCol1Picture2 = 1140;
    stepCol2Picture1 = 0;
    stepCol2Picture2 = 1140;
    stepCol3Picture1 = 0;
    stepCol3Picture2 = 1140;
    pictureHeight;
    pictureWidth;
    rotateImageHeight;

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            this.animateSliderBallot();
        }, 1000);
    }

    // START animateSliderBallot
    animateSliderBallot() {
        const fps = 30;

        if (this.rotateImageHeight !== undefined) {
            const restartStep = this.pictureHeight - (this.rotateImageHeight - this.pictureHeight);

            // restart count stepCol1Picture1
            if (this.stepCol1Picture1 <= -this.rotateImageHeight) {
                this.stepCol1Picture1 = restartStep;
            }
            // restart count stepCol1Picture2
            if (this.stepCol1Picture2 <= -this.rotateImageHeight) {
                this.stepCol1Picture2 = restartStep;
            }
            // restart count stepCol2Picture1
            if (this.stepCol2Picture1 <= -this.rotateImageHeight) {
                this.stepCol2Picture1 = restartStep;
            }
            // restart count stepCol2Picture2
            if (this.stepCol2Picture2 <= -this.rotateImageHeight) {
                this.stepCol2Picture2 = restartStep;
            }
            // restart count stepCol3Picture1
            if (this.stepCol3Picture1 <= -this.rotateImageHeight) {
                this.stepCol3Picture1 = restartStep;
            }
            // restart count stepCol3Picture2
            if (this.stepCol3Picture2 <= -this.rotateImageHeight) {
                this.stepCol3Picture2 = restartStep;
            }

            this.stepCol1Picture1--;
            this.stepCol1Picture2--;
            this.stepCol2Picture1 = this.stepCol2Picture1 - 2;
            this.stepCol2Picture2 = this.stepCol2Picture2 - 2;
            this.stepCol3Picture1 = this.stepCol3Picture1 - 0.5;
            this.stepCol3Picture2 = this.stepCol3Picture2 - 0.5;
        }

        this.moveSliderBallot(0, this.stepCol1Picture1, this.stepCol1Picture2);
        this.moveSliderBallot(1, this.stepCol2Picture1, this.stepCol2Picture2);
        this.moveSliderBallot(2, this.stepCol3Picture1, this.stepCol3Picture2);

        setTimeout(() => {
            requestAnimationFrame(() => {
                this.animateSliderBallot();
            });
        }, 1000 / fps);
    }

    moveSliderBallot(index?, step1?, step2?) {
        const slider = this.sliderBallot.nativeElement;

        const colSlider = <HTMLElement>slider.getElementsByClassName('infiniteSlider__col')[index];
        const picture1 = colSlider.getElementsByTagName('picture')[0];
        const picture2 = colSlider.getElementsByTagName('picture')[1];

        if (window.innerWidth <= 767) {
            this.pictureHeight = picture1.clientHeight;
            this.pictureWidth = picture1.clientWidth;
        } else {
            this.pictureHeight = picture1.getBoundingClientRect().height;
            this.pictureWidth = picture1.getBoundingClientRect().width;
        }

        // tslint:disable-next-line:max-line-length
        this.rotateImageHeight = Math.sqrt((this.pictureHeight * this.pictureHeight) + (this.pictureWidth * this.pictureWidth));

        picture1.style.top = step1 + 'px';
        picture2.style.top = step2 + 'px';
    }

}
