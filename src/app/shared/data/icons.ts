import {ImageUrl} from '../models/image-url';

export const icons: { [name: string]: ImageUrl } = {
  // Languages
  android: {name: 'Android', url: 'assets/android-icon.svg'},
  angular: {name: 'Angular', url: 'assets/angular-icon.svg'},
  api: {name: 'Api', url: 'assets/api-icon.svg'},
  java: {name: 'Java', url: 'assets/java-icon.svg'},
  kotlin: {name: 'Kotlin', url: 'assets/kotlin-icon.svg'},
  springBoot: {name: 'Spring Boot', url: 'assets/spring-boot-icon.svg'},
  typescript: {name: 'Typescript', url: 'assets/typescript-icon.svg'},
  web: {name: 'Web', url: 'assets/web-icon.svg'},

  // Links
  hostHeroku: {name: 'Heroku hosted', url: 'assets/heroku-icon.svg'},
  hostSelf: {name: 'Self hosted', url: 'assets/raspberrypi-icon.svg'},
  github: {name: 'Github', url: 'assets/github-icon.svg'},
  linkedIn: {name: 'LinkedIn', url: 'assets/linkedin-icon.svg'},
}
