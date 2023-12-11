import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyServiceService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss',
  providers: [SpotifyServiceService]
})
export class SongCardComponent {

  artistName: string = 'playlists';
  musicData: any;

  constructor(private spotifyService: SpotifyServiceService) { }

  ngOnInit() {
    this.getPlayList(this.artistName);
    // this.artistName = '';
  }

  onSubmit(){
    // this.getWeatherData(this.cityName);
    // this.cityName = '';
  }

  private getPlayList(artistName_: string){
    const artistName = artistName_; 
    this.spotifyService.searchPlaylists(artistName).subscribe(
      (data: any) => {
        this.musicData = data;
        console.log(data); 
      }
    );
  }

}
