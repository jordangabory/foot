import { Component, Inject, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'ns-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
    
})
export class BasketComponent {
  private results : any;
  private ults : string;

  constructor(
    @Inject('platform') public platform ,  private route: ActivatedRoute , private router: Router
  ) {}

  ngOnInit(): void {
    

    const ido = this.route.snapshot.params["name"];

    this.results = this.route.params.subscribe(params => console.log( 'jptgjephgieo' +params["name"])  );
    
    ;
    
  }

  ngOnDestroy() {
    this.results.unsubscribe();
  }
}