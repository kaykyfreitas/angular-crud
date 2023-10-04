import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent {

  produtos$: Observable<Produto[]>;

  produtinhos: Produto[] = [];

  constructor(private service: ProdutosService) {

    console.log(service.list().subscribe())

    this.produtos$ = service.list()
    .pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
    );

    this.produtos$.subscribe(
      (produtos: Produto[]) => {
        console.log('Produtos:', produtos);
        produtos = produtos
      },
      (error) => {
        console.error('Ocorreu um erro ao buscar os produtos:', error);
      }
    );
  }

}
