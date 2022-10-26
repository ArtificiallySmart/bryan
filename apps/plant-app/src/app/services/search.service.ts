import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchPlants(query: string): Observable<Plant[]> {
    query.toLowerCase().replace(' ', '+');
    const req = this.http.get<Plant[]>(`api/search?search=${query}`);
    //.pipe(catchError(this.handleError<Plant[]>('searchPlants', [])));
    return req;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
