import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[]=[]
  loading: boolean = false;

  constructor(private spotify:HeroeService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){

    this.loading = true;

    this.spotify.getArtistas(termino)
      .subscribe(data => {
        this.artistas = data
        this.loading = false;
      })
  }
}
