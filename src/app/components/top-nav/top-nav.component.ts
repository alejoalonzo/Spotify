import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft,  faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
