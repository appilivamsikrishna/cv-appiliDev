import { AppConstants } from '../app.constants';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = AppConstants.APP_TITLE_VERSION;

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  public changeLanguageTo(languageCode: string): void {
    this.translateService.use(languageCode);
  }

}
