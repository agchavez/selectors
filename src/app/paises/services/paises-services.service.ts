
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contries } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServicesService {
  baseUrl:string = "https://restcountries.com/v3.1";
  private _regions:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions():string[]{
    return [...this._regions]
  }
  constructor(
    private http: HttpClient
  ) { }

  getRegions(region:string):Observable<Contries[]>{
    const url:string  = `${this.baseUrl}/region/${region}`;
    console.log("here");

    return this.http.get<Contries[]>(url);
  }
}
