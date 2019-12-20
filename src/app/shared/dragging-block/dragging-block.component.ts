import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'mt-dragging-block',
    templateUrl: './dragging-block.component.html',
    styleUrls: ['./dragging-block.component.sass']
})
export class DraggingBlockComponent implements OnInit {
    @ViewChild('dragContainer') dragContainer: ElementRef;

    isDrag: boolean;

    constructor() {
    }

    ngOnInit() {
        this.drag();
    }

    drag() {
        const container = this.dragContainer.nativeElement;
        const dragme = <HTMLElement>container.getElementsByClassName('dragme')[0];
        const sliderCoords = this.getCoords(container);
        let newPosition;

        container.addEventListener('mousedown', (e) => {
            this.isDrag = true;
            const rightEdge = container.offsetWidth + 2;
            newPosition = e.pageX - sliderCoords.left;
            newPosition = newPosition < 2 ? 0 : newPosition;
            newPosition = newPosition > rightEdge ? rightEdge : newPosition;
            this.moveAt(newPosition);
        });

        dragme.addEventListener('mousedown', (e) => {
            this.isDrag = false;
            const dragmeCoords = this.getCoords(dragme);
            const shiftX = e.pageX - dragmeCoords.left;

            const changePosition = (el) => {
                this.isDrag = false;
                const rightEdge = container.offsetWidth - dragme.offsetWidth + 2;
                newPosition = el.pageX - shiftX - sliderCoords.left;
                newPosition = newPosition < 2 ? 0 : newPosition;
                newPosition = newPosition > rightEdge ? rightEdge : newPosition;
                this.moveAt(newPosition);
            };

            container.addEventListener('mousemove', changePosition, false);

            const containerMouseUp = container.addEventListener('mouseup', () => {
                container.removeEventListener('mousemove', changePosition, false);
                container.removeEventListener('mouseup', containerMouseUp, false);
            });
        });

        // start touch
        dragme.addEventListener('touchstart', (e) => {
            this.isDrag = false;
            const dragmeCoords = this.getCoords(dragme);
            const shiftX = e.touches[0].clientX - dragmeCoords.left;

            const changePosition = (el) => {
                this.isDrag = false;
                const rightEdge = container.offsetWidth - dragme.offsetWidth + 2;
                newPosition = el.touches[0].clientX - shiftX - sliderCoords.left;
                newPosition = newPosition < 2 ? 0 : newPosition;
                newPosition = newPosition > rightEdge ? rightEdge : newPosition;
                this.moveAt(newPosition);
            };

            container.addEventListener('touchmove', changePosition, false);

            const containerTouchend = container.addEventListener('touchend', () => {
                container.removeEventListener('touchmove', changePosition, false);
                container.removeEventListener('touchend', containerTouchend, false);
            });
        });

        dragme.addEventListener('dragstart', () => {
            return false;
        });
        // end touch
    }

    getCoords(elem) {
        const box = elem.getBoundingClientRect();
        return { left: box.left + pageXOffset };
    }

    moveAt(position) {
        const container = this.dragContainer.nativeElement;
        const preview = <HTMLElement>container.getElementsByClassName('preview')[0];
        const dragme = <HTMLElement>container.getElementsByClassName('dragme')[0];

        preview.style.width = position + 'px';
        dragme.style.left = position + 'px';
    }
}
