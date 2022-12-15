import { Component, OnInit } from '@angular/core';
import { RequisitoService } from 'app/Service/ruos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


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
