import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @HostBinding('class') classObj = {
    'meu-texto': true,
    'minha-font': true,
  }
}
