import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";


@Injectable()
export class ImageService {
    private serverUrl = "https://jsonplaceholder.typicode.com/posts";
    private  lom : any ;
    private apikey : string = "f9ea396d830c27593fd6612b6b4ed2db";
    private apimovie : string = "https://api.themoviedb.org/3/genre/movie/list?api_key=";

    constructor(private http: HttpClient) { }

   public getData() {
        return this.http.get(this.serverUrl).map((res)=>{
            return res
        });
    }

    public getop(id){
        return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id).map((res)=>{
            return res 
        });
    }

    public getCategorie(){
        return this.http.get(this.apimovie + this.apikey + "&language=en-US").map((res)=>{
            return res 
        });
    }


}