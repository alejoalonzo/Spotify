import { Component } from '@angular/core';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { SpotifyServiceService } from '../../services/spotify-service.service';


@Component({
  selector: 'app-playlist',
  standalone: true,  
  imports: [SongCardComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
  providers: [SpotifyServiceService]
})
export class PlaylistComponent {
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
