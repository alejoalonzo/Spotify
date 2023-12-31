// shared.module.ts
import { NgModule } from '@angular/core';
import { SpotifyServiceService } from '../app/services/spotify-service.service';

@NgModule({
  providers: [SpotifyServiceService],
})
export class SharedModule {}
