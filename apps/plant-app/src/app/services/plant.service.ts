import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private apiService: ApiService, private http: HttpClient) {}

  addPlant(id: string) {}

  searchPlants(query: string): Observable<Plant[]> {
    query.toLowerCase().replace(' ', '+');
    return this.http
      .get<Plant[]>(`api/plant/search?search=${query}`)
      .pipe(catchError(this.handleError<Plant[]>('searchPlants', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
