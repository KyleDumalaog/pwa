import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';//serviceworker for update

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
//para magupdate na may message
export class AppComponent {
  isUpdated = false;
  constructor(private swUpdate: SwUpdate) {
  }
  async ngOnInit(){
    await this.swUpdate.versionUpdates.subscribe(() => {
      this.swUpdate.checkForUpdate().then(newVersion => {
        if (newVersion && confirm('A new version is available. Do you want to load it?')){
          this.isUpdated = true;
          window.location.reload();
        }
      })
    })
  }
}
