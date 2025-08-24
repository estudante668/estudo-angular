import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListaProdutos } from './componente/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  titulo = 'FRONTEND ANGULAR'

  mostrarMensagem(){
    alert('Clicou no botão');
  }

}
