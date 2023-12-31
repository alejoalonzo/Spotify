import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistShowAllComponent } from './playlist-show-all.component';

describe('PlaylistShowAllComponent', () => {
  let component: PlaylistShowAllComponent;
  let fixture: ComponentFixture<PlaylistShowAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistShowAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
