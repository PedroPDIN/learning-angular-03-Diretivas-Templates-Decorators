import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {
  @Input() appInputBackground: string = 'white'; // *o nome do input por ser igual do selector, facilita na questão de passa o valor diretamente.
  @Input() textColor: string = 'black';

  @HostBinding('style.background-color') bgColor: string = ''; // '' = string vazia significa valor/estilo padrão.
  @HostBinding('style.color') txtColor: string = ''; // '' = string vazia significa valor/estilo padrão.

  @HostListener('focus') onFocus() {
    this.bgColor = this.appInputBackground;
    this.txtColor = this.textColor;
  }

  @HostListener('blur') onBlur() {
    this.bgColor = "white";
    this.txtColor = "black";
  }



}
