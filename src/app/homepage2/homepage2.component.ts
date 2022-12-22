import { Component, OnInit } from '@angular/core';
import { RequisitoService } from 'app/Service/ruos.service';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.css'],
})
export class Homepage2Component implements OnInit {


  repost: any;

  constructor(private ruos: RequisitoService) { }

  ngOnInit(): void {

    this.ruos.requisitos()
    .subscribe(data =>{
      this.repost = data;
      console.log(this.repost)
    })

  }

}
