import { Component, ElementRef, Renderer2, input } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2,
  ) { }

  createElement(inputText: string) {
    const elDiv = document.createElement('div');

    elDiv.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(elDiv);
  }

  createElementCorrect(inputText: string) {
    const elDiv = this._renderer2.createElement('div')

    const text = this._renderer2.createText(inputText);

    this._renderer2.appendChild(elDiv, text);
    this._renderer2.setStyle(elDiv, 'color', 'red');
    this._renderer2.appendChild(this._elRef.nativeElement, elDiv);
  }

}
