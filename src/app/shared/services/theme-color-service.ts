import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Meta} from "@angular/platform-browser";
import {ThemeModeService} from "./theme-mode-service";
import {getPrimaryColor} from "../helpers";

@Injectable({
  providedIn: 'root'
})
export class ThemeColorService {

  // Initialize a BehaviourSubject that holds the current app theme
  private _themeColor$ = new BehaviorSubject<APP_THEME_COLOR>(this.getThemeColorFromLocalStorage())

  constructor(private meta: Meta, private themeModeService: ThemeModeService, private ngZone: NgZone) {
    this.initThemeColorSubject()
  }

  get themeColor$(): Observable<APP_THEME_COLOR> {
    return this._themeColor$.asObservable();
  }

  get themeColor(): APP_THEME_COLOR {
    return this._themeColor$.getValue();
  }

  /**
   * Public setter which will trigger a theme color change.
   * @param themeColor The theme to set
   */
  setThemeColor(themeColor: APP_THEME_COLOR) {
    this._themeColor$.next(themeColor);
  }

  /**
   * Initializes a subscriber to _themeColor$ BehaviourSubject which will apply the new theme color class to the body
   * and persists it in the local storage.
   * @private
   */
  private initThemeColorSubject() {
    this._themeColor$.subscribe(themeColor => {

      // Get the <body> element to modify its class list.
      const bodyClasses = document.body.classList;

      // Remove all the old themeColor classes.
      bodyClasses.remove(...Object.values(APP_THEME_COLOR));

      // Add the new themeColor class to the <body> element.
      bodyClasses.add(themeColor);

      // Persist the new themeColor in localStorage.
      this.persistThemeColor(themeColor);

      // Update meta tag theme-color with the new primary color. Run in ngZone to ensure changes have been detected.
      this.ngZone.run(() => {
        const primaryColor = getPrimaryColor(this.themeModeService.themeMode)
        this.meta.updateTag({name: 'theme-color', content: primaryColor});
      })
    })
  }

  /**
   * Persist the current themeColor in the local storage.
   * @param themeColor The themeColor to persist.
   * @private
   */
  private persistThemeColor(themeColor: APP_THEME_COLOR) {
    localStorage.setItem(STORAGE_THEME_COLOR_KEY, themeColor);
  }

  /**
   * Retrieve the current theme color from the local storage. If no theme is stored it defaults to DEEP_ORANGE.
   * @private
   */
  private getThemeColorFromLocalStorage(): APP_THEME_COLOR {
    const savedTheme = localStorage.getItem(STORAGE_THEME_COLOR_KEY)

    return this.isValidThemeColor(savedTheme) ? savedTheme as APP_THEME_COLOR : APP_THEME_COLOR.DEEP_ORANGE
  }

  /**
   * Validates if a string is a valid themeColor by comparing it to the APP_THEME_COLOR enum.
   * @param themeColor The themeColor string to check
   * @private
   */
  private isValidThemeColor(themeColor: string | null): boolean {
    return Object.values(APP_THEME_COLOR).includes(themeColor as APP_THEME_COLOR);
  }

}

export const STORAGE_THEME_COLOR_KEY = 'app-theme-color';

export enum APP_THEME_COLOR {
  DEEP_ORANGE = 'theme-color-deep-orange',
  DEEP_PURPLE = 'theme-color-deep-purple',
  GREEN = 'theme-color-green'
}
