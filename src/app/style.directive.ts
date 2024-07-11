import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // @HostBinding('style') propStyle = 'background-color: orange; color: white';

  // ou

  @HostBinding('style') propStyle = { // recomendado utilizar para criar lógicas para deixar ainda mas dinâmica.
    backgroundColor: 'orange',
    color: 'white',
  };

  @HostBinding('style.fontSize.px') propStyleFont = 40;

}
