import { Component, OnInit } from '@angular/core';

import { livroDTO } from './LivroDTO';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: livroDTO = {
    titulo: 'Aprendendo Estrutura de dados com JavaScript',
    rating: 4.54321,
    numeroPaginas: 315,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://a.co/d/fZyUG0T',
  };

  constructor() {}

  ngOnInit(): void {}
}
