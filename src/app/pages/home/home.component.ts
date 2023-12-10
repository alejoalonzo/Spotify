import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faBookBookmark,faPlus } from '@fortawesome/free-solid-svg-icons';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { PlaylistComponent } from '../playlist/playlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, TopNavComponent,PlaylistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  faHome = faHome;
  faSearch = faSearch;
  faBookBookmark = faBookBookmark;
  faPlus = faPlus;
}
