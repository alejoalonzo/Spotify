import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { PlaylistComponent } from '../../pages/playlist/playlist.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SidebarComponent, TopNavComponent, PlaylistComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
