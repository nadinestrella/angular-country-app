import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  // peticion hhttp, primero injectar
  //importante anadir el provider en el app config
  private http = inject(HttpClient);

  //crear un metodo. peticion hhttp

  searchByCapital(query: string) {
    query = query.toLowerCase();
    return this.http.get(`${API_URL}/capital/${query}`);
  }
}
