import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import {HttpClient} from '@angular/common/http'

@Injectable()

export class PalabrasServices{

    private API_SERVER = "https://palabras-aleatorias-public-api.herokuapp.com/random"

    constructor(public http:HttpClient){}

    public getWords():Observable<any>
    {
        return this.http.get(this.API_SERVER);
    }
}