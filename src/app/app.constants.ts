import { VERSION } from '@angular/core';

declare const bootstrap: any; // global reference

/**
 * Application constants
 */
export class AppConstants {


  public static APP_TITLE = 'AVK';
  public static AUTHOR_NAME = 'AVK CDN';
  public static APP_TITLE_VERSION: string = AppConstants.APP_TITLE;

  public static ANGULAR_VERSION = 'Ng ' + VERSION.full;
  public static BOOTSTRAP_VERSION = bootstrap.Tooltip.VERSION;

}
