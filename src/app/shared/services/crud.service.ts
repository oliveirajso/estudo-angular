import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  salvar<T>(recursoEndpoint: string, dados: any) {
    return this.httpClient.post<T>(`${this.apiUrl}/${recursoEndpoint}`, dados);
  }

  atualizar<T>(recursoEndpoint: string, dados: any, id: number) {
    return this.httpClient.put<T>(
      `${this.apiUrl}/${recursoEndpoint}/${id}`,
      dados
    );
  }

  recuperarDados<T>(recurso: string, params: HttpParams): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${recurso}`, { params });
  }

  deletar<T>(recurso: string, id: number): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/${recurso}/${id}`);
  }
}
