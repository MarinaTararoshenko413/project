import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'mt-arc-chart',
    templateUrl: './arc-chart.component.html',
    styleUrls: ['./arc-chart.component.sass']
})
export class ArcChartComponent implements OnInit {
    @ViewChild('circleProgress') circleProgress: ElementRef;
    chartsIsAnimated: boolean = false;

    endValue = 90;
    maxValue = 100;

    ctx;
    x;
    y;
    radius;
    start;
    end;
    value;
    pi;
    canvas;
    curPerc = 0;
    curPerc2 = 0;
    circ;
    totalArcLength;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
    ) { }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initCanvas();
            this.playAnimateChart();
        }
    }

    playAnimateChart() {
        this.animate();
        this.chartsIsAnimated = true;
    }

    initCanvas() {
        this.canvas = this.circleProgress.nativeElement;
        this.ctx = this.canvas.getContext('2d');
        this.pi = Math.PI;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.radius = this.canvas.width / 2 - 20;
        this.circ = this.pi * 2;
        this.start = this.pi * 1.5; // Start position
        this.end = this.pi * 3.5; // End position
        this.value = 0.000;
        this.totalArcLength = this.pi * 2;

        this.defCircle();
    }

    // START arc default
    defCircle() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 30;
        this.ctx.strokeStyle = '#dddfe3';
        this.ctx.arc(this.x, this.y, this.radius, this.start, this.end, false);
        this.ctx.stroke();
    }

    // START supValueCircle
    supValueCircle() {
        this.ctx.beginPath();
        this.ctx.font = '30px CircularStd-Bold';
        this.ctx.fillStyle = '#031b4e';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('Bluehosting', this.x, this.canvas.width / 2 - 30);
    }

    // START subValueCircle
    subValueCircle() {
        this.ctx.beginPath();
        this.ctx.font = '12px CircularStd-Bold';
        this.ctx.fillStyle = '#031b4e';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('Análisis total', this.x, this.canvas.width / 2 + 30);
    }

    // START valueCircle
    valueCircle() {
        this.ctx.beginPath();
        this.ctx.font = '40px CircularStd-Bold';
        this.ctx.fillStyle = '#031b4e';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('2x', this.x, this.canvas.width / 2);
    }

    // START progress
    progress(current) {
        this.ctx.beginPath();
        this.ctx.lineWidth = 30;
        this.ctx.strokeStyle = '#FF3366';
        this.ctx.arc(this.x, this.y, this.radius, this.start, ((this.totalArcLength * current) + this.start), false);
        this.ctx.stroke();
    }

    animate(current?) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.defCircle();
        this.subValueCircle();
        this.supValueCircle();
        this.valueCircle();
        this.progress(current);
        this.curPerc++;

        if (this.curPerc < this.endValue + 1) {
            requestAnimationFrame(() => {
                this.animate(this.curPerc / this.maxValue);
            });
        }
    }

}
