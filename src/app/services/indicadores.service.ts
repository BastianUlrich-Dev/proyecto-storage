import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicador } from '../models/indicador.model';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private apiUrlIndicadores = 'https://mindicador.cl/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllIndicadores(){
    return this.httpClient.get<Indicador[]>(this.apiUrlIndicadores);
  }
}
