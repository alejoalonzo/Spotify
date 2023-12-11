import { Component } from '@angular/core';
import { SongCardComponent } from '../../components/song-card/song-card.component';

@Component({
  selector: 'app-playlist',
  standalone: true,  
  imports: [SongCardComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',

})
export class PlaylistComponent {

}
