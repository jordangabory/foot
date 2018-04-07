import { Component, Inject, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params } from "@angular/router";
import { ImageService } from "../service/image.service";

@Component({
    moduleId: module.id,
    selector: 'ns-sportdetail',
    templateUrl: './sportdetail.component.html',
    providers: [ ImageService ]
})
export class SportDetailComponent {
  id: any;
  paramsSub: any;
  private results : any;

  op: any
  constructor(
    @Inject('platform') public platform, private Image : ImageService ,  private route: ActivatedRoute , private router: Router
  ) {}

  

  ngOnInit(): void {
    this.results = this.route.params.subscribe(params =>{ console.log(params['id']); } );

    const ido = +this.route.snapshot.params["id"];

    console.log(ido +'pa male pale moun ');
    
    this.Image.getop(ido).subscribe( resu=> this.results =resu);
  }

  

  

 
}