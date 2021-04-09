import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private REST_API_SERVER = "https://api.spacexdata.com/v3/launches";
    constructor(private httpClient: HttpClient){}

    public sendGetRequest(){
        return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
    }

    public sendGetRequestByFlightNumber(num: string | null){
        return this.httpClient.get(`${this.REST_API_SERVER}/${num}`).pipe(retry(3), catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse){
        let errMess;
        if(error.error instanceof ErrorEvent){
            errMess = `Error: ${error.error.message}`;
        }
        else {
            errMess = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errMess);
        return throwError(errMess);
    }
}