import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('meuInput3') meuInputEl!: ElementRef<HTMLInputElement>;
  @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;

  @ViewChild('filhoCom') componentFilho!: FilhoComponent;
  // OU
  // @ViewChild(FilhoComponent) componentFilho!: FilhoComponent;

  buttonLists: string[] = ['botão 1', 'botão 2', 'botão 3'];
  @ViewChildren('meuButton') buttonsList!: QueryList<ElementRef<HTMLButtonElement>>;

  clicou(input: HTMLInputElement) {
    // console.log(input.value)
    input.value = 'Atualizado'
  }

  onClickInput() {
    this.meuInputEl.nativeElement.value = 'Pedro Lima';
  }

  onFocus() {
    this.meuInputEl.nativeElement.focus();
  }

  updateContent() {
    console.log(this.minhaDivEl);
    this.minhaDivEl.nativeElement.innerHTML = 'Aqui está o novo conteúdo inicial.';
  }

  hello() {
    this.componentFilho.DigaOi();
    this.componentFilho.message = "Eu disse Oi!!";
  }

  ngAfterViewInit() {
    console.log('método ngAfterViewInit', this.buttonsList)

    this.buttonsList.changes.subscribe((result) => { // ao mudar a estrutura o método changes é acionado, lembrando que é a alteração da estrutura e não nas propriedades do elemento HTML (como por exemplo alteração da classe de estilo do elemento).
      console.log(result) // tem que está incrementado no ngAfterViewInit.
    })
  }

  changeColor(event: Event) {
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetColor() {
    this.buttonsList.forEach((btn) => {
      btn.nativeElement.style.backgroundColor = '';
      btn.nativeElement.style.color = 'black';
    });
  }

  first() {
    this.buttonsList.first.nativeElement.style.backgroundColor = 'orange';
  }

  remove() {
    this.buttonLists.shift();
  }
}
