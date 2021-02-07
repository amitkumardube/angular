import { Injectable } from '@angular/core';
import { IProduct } from './product'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'


// decorating the class with injectable declarator. Its like registering it with injector.
// currently it's registered with root injector which means that the instance for this service is available  for injection anywhere in the application.

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient){
    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        console.error(err.error.message);
        return throwError(err.error.message);
    }
}