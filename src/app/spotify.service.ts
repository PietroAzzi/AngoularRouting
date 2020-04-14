import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBfrS0wjiBttVnkVUxM4hbbCSYIcK22fgAvdeOqRaDsw2I_69Z_T07LntgzgBN4gk6A6Hrva5M9R-_yKs-GygrxTzaIxHwrjpw3GpeX_WjtpD-Eej-N_mm4Weo6R1gyqgYhMB87_ax0H7xTVTBRrkxjLdhmrRr3QOg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
