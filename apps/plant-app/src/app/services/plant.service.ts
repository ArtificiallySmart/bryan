import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private apiService: ApiService, private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPlants() {
    const req = this.http
      .get<Plant[]>(`api/plant`)
      .pipe(catchError(this.handleError<Plant[]>('getPlants', [])));
    req.subscribe();
    return req;
  }

  async addPlant(id: string) {
    const req = this.http
      .post(`api/plant/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('addPlant', [])));
    req.subscribe();
  }

  async createPlant(plant: Plant) {
    const req = this.http
      .post(`api/plant`, { plant }, this.httpOptions)
      .pipe(catchError(this.handleError('addPlant', [])));
    req.subscribe();
  }

  searchPlants(query: string): Observable<Plant[]> {
    query.toLowerCase().replace(' ', '+');
    const req = this.http
      .get<Plant[]>(`api/plant/search?search=${query}`)
      .pipe(catchError(this.handleError<Plant[]>('searchPlants', [])));
    req.subscribe();
    return req;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
