import { Component } from '@angular/core';
import { ShellComponent } from '../../shared/shell/shell.component';
import { FooterBannerPremiumComponent } from '../../components/footer-banner-premium/footer-banner-premium.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShellComponent, FooterBannerPremiumComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
 
})
export class HomeComponent {

}
