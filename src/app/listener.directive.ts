import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  @HostListener('click') onClick() {
   console.log('Clicou!!');
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: Event) {
    console.log('Digitou!!');

    const textFull = (event.target as HTMLInputElement).value;
    console.log(textFull)
  }

}
