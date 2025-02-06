import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appLoseFocusAfterClick]',
    standalone: false
})
export class LoseFocusAfterClickDirective {

  constructor(private elRef: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.elRef.nativeElement.blur();
  }

}
