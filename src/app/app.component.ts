import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'me';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "mindtreelogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/mindtree-logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "hachlogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Hach-Logo.svg")
    );
  }

}
