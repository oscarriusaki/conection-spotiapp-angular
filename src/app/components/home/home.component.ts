import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCaniones: any[]=[];
  loading: boolean = false;

  constructor(private servicio:HeroeService) { 
    
    this.loading = true;
    this.servicio.getNewReleases()
      .subscribe(data => {
        this.nuevasCaniones = data;
        this.loading = false;
      })

  }

  ngOnInit(): void {
     
  }


}
