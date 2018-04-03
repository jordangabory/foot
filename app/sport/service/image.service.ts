import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";


@Injectable()
export class ImageService {
    private serverUrl = "https://picsum.photos/list";

    constructor(private http: HttpClient) { }

   public getData() {
        return this.http.get(this.serverUrl).map((res)=>{
            return res
        });
    }
}