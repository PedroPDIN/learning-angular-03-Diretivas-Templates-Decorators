import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInputDirective]'
})
export class FocusSecondInputDirectiveDirective implements AfterViewInit {
  @HostBinding('style') elDisplay = {
    display: 'flex',
    flexDirection: 'column',
  }

  constructor(private _elRef: ElementRef) { }

  ngAfterViewInit() {
    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].focus();
      inputList[1].style.backgroundColor = 'aqua';
    }
  }
}
