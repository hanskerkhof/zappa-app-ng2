import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appAutoFocus]'
})

export class AutoFocusDirective implements OnInit {
    constructor(public element: ElementRef) {
    }

    ngOnInit(): void {
        this.element.nativeElement.focus();
    }
}
