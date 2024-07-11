import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.scss'
})
export class ElementRefComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>

  constructor(private readonly _elRef: ElementRef) { }

  ngOnInit() {
    const divEl = this._elRef.nativeElement.querySelector('#outra-div') as HTMLDivElement;

    divEl.textContent = 'Sou outra Div!!!';
    divEl.style.backgroundColor = 'green';
    divEl.style.color = 'yellow';
    divEl.style.fontWeight = 'bold';
    divEl.style.cursor = 'pointer';

    divEl.addEventListener('click', () => {
      console.log('Cliquei na Div!!!');
    });
  }

  ngAfterViewInit(){
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.style.color = 'white';
    this.divEl.nativeElement.textContent = 'Sou uma Div';
    this.divEl.nativeElement.classList.add('minha-classe');
  }

  creteElement() {
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a Div criada!!';
    novaDiv.classList.add('div-red'); // pois está utilizando o document (ou seja trabalhando globalmente) a classe deveria está no arquivo de estilização global no caso o style.scss.

    this._elRef.nativeElement.appendChild(novaDiv);
  }


}
