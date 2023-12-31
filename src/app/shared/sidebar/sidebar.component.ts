import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faBookBookmark,faPlus } from '@fortawesome/free-solid-svg-icons';
import { SpotifyServiceService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [SpotifyServiceService]
})
export class SidebarComponent {

  faHome = faHome;
  faSearch = faSearch;
  faBookBookmark = faBookBookmark;
  faPlus = faPlus;

  constructor(private spotifiService:SpotifyServiceService){}

  
  onNavigatation(page: string) {
    if(page === 'search'){
      this.spotifiService.isSearchVisible.next(true);
    }else{
      this.spotifiService.isSearchVisible.next(false);
    }
  }

}
