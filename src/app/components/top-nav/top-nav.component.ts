import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft,  faChevronRight, faSearch} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { SpotifyServiceService } from '../../services/spotify-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
  providers: [SpotifyServiceService]
})
export class TopNavComponent implements OnInit{

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSearch = faSearch;

  public isSearchFieldVisible: boolean = false;

  constructor( private spotifiService: SpotifyServiceService) { }

  ngOnInit(): void {
    this.spotifiService.isSearchVisible.subscribe(status => {
      this.isSearchFieldVisible = status;
    })
  }

}
