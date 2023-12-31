import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBannerPremiumComponent } from './footer-banner-premium.component';

describe('FooterBannerPremiumComponent', () => {
  let component: FooterBannerPremiumComponent;
  let fixture: ComponentFixture<FooterBannerPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBannerPremiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterBannerPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
