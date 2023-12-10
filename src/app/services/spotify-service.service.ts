import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
  
})
export class SpotifyServiceService {

  private apiUrl = environment.spotifyApiBaseUrl;

  constructor(private http: HttpClient) { }

  searchPlaylists(artistName: string): Observable<any> {

    const params = new HttpParams().set('q', artistName);

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.XRapidAPIkeyHeaderValue,
      'X-RapidAPI-Host': environment.XRapidAPIhostHeaderValue
    });

    return this.http.get(this.apiUrl, { headers, params });
  }
}



