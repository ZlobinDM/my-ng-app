import {
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive ({
 selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input('appBackground') hoverColor = 'red';
    @Input() defaultColor = 'transparent';
    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor;
    }
}
