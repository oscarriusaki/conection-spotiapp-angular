import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private http:HttpClient) {
    console.log('Constructor del home echo');
  }
  getQuery(query: string){
    const url = `https://api.spotify.com/v1${query}`;
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQA73voY-aCjdZZtXF8DNG8wBdWVV_mk2Fa8w_7B4XxsrY0rka_wC8qnJw4fyH57srh0Ua8HMqVCgWM3jcVt3KmrFYH0M4YTfwn9nGKisC_5fJnIgNE'
    });

    return this.http.get(url, {headers});
    
  }

  getNewReleases(){
    return this.getQuery('/browse/new-releases')
          .pipe(
            map((data: any) => {
              return data.albums.items
            })
          )
  } 
  
  getArtistas(termino:string){
    return this.getQuery(`/search?q=${termino}&type=artist&limit=15`)
              .pipe(
                map((resp:any) => {
                  return resp.artists.items;
                })
              )
  }
  getArtista(id:string){
    return this.getQuery(`https://api.spotify.com/v1/artists/${id}`)
              // .pipe(
              //   map((resp:any) => {
              //     return resp.artists.items;
              //   })
              // )
  }
}
