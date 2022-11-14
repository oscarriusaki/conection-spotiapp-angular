import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean = false;

  constructor(private router:ActivatedRoute,
              private spotify:HeroeService) { 
  
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
    })
    this.loading = true;
    
  }
  
  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
        this.loading=false;
      })
  }
  
}
