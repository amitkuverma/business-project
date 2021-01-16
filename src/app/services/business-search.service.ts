import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessSearchService {
  private apiPath: string;
  private search: string;

  constructor(private httpClient: HttpClient) { 
    const env: any = environment;
    this.apiPath = env.paths.api;
    this.search = 'searching';
  }

  searchingData( sendingSearchData ){
    return this.httpClient.post<object>(`${this.apiPath}/${this.search}/`, sendingSearchData)
  }

}

