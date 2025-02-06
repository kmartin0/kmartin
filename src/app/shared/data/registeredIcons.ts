import {ImageUrl} from '../models/image-url';

export const registeredIcons: { [name: string]: ImageUrl } = {
  // Languages
  android: {name: 'Android', url: 'assets/android-icon.svg', iconId: 'android'},
  angular: {name: 'Angular', url: 'assets/angular-icon.svg', iconId: 'angular'},
  api: {name: 'Api', url: 'assets/api-icon.svg', iconId: 'api'},
  java: {name: 'Java', url: 'assets/java-icon.svg', iconId: 'java'},
  kotlin: {name: 'Kotlin', url: 'assets/kotlin-icon.svg', iconId: 'kotlin'},
  springBoot: {name: 'Spring Boot', url: 'assets/spring-boot-icon.svg', iconId: 'springBoot'},
  typescript: {name: 'Typescript', url: 'assets/typescript-icon.svg', iconId: 'typescript'},
  web: {name: 'Web', url: 'assets/web-icon.svg', iconId: 'web'},
  websocket: {name: 'Websocket', url: 'assets/websocket-icon.svg', iconId: 'websocket'},
  postgresql: {name: 'PostgreSQL', url: 'assets/postgresql-icon.svg', iconId: 'postgresql'},
  mongodb: {name: 'Mongo DB', url: 'assets/mongodb-icon.svg', iconId: 'mongodb'},
  arcore: {name: 'AR Core', url: 'assets/arcore-icon.svg', iconId: 'arcore'},
  mysql: {name: 'MySQL', url: 'assets/mysql-icon.svg', iconId: 'mysql'},

  // Links
  hostSelf: {name: 'Self hosted (can be offline)', url: 'assets/raspberrypi-icon.svg', iconId: 'hostSelf'},
  github: {name: 'Github', url: 'assets/github-icon.svg', iconId: 'github'},
  linkedIn: {name: 'LinkedIn', url: 'assets/linkedin-icon.svg', iconId: 'linkedIn'},
  googlePlayStore: {name: 'Google Play Store', url: 'assets/google-play-icon.svg', iconId: 'googlePlayStore'},

}
