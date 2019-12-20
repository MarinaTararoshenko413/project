import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[mtSizeColumn]'
})
export class SizeColumnDirective implements OnInit {
    @Input() sizeColumn: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.setSizeColumn(this.sizeColumn);
    }

    setSizeColumn(size) {
        this.el.nativeElement.style.width = size + 'px';
        this.el.nativeElement.style.maxWidth = size + 'px';
        this.el.nativeElement.style.overflow = 'hidden';
        this.el.nativeElement.style.textOverflow = 'ellipsis';
        this.el.nativeElement.style.whiteSpace = 'nowrap';
    }
}
