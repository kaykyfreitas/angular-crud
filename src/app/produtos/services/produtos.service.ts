import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = "/assets/produtos.json"

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
    );
  }

}
