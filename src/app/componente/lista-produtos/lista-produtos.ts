import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelos/produto';
import { ProdutoService } from '../../servico/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.scss'
})
export class ListaProdutos{

  produtos: Produto[] = [];

  constructor() {
    this.produtos = [
      {
        id: 1, nome: 'Produto A', preco: 10.0,
        descricao: 'Frio',
        imagemUrl: 'eeeeee'
      },
      {
        id: 2, nome: 'Produto B', preco: 20.0,
        descricao: 'Quente',
        imagemUrl: 'ttttttt'
      },
      {
        id: 3, nome: 'Produto C', preco: 30.0,
        descricao: 'Morno',
        imagemUrl: 'pppppp'
      }
    ];
  }

}
