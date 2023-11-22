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
  websocket: {name: 'Websocket', url: 'assets/websocket-icon.svg'},
  postgresql: {name: 'PostgreSQL', url: 'assets/postgresql-icon.svg'},
  mongodb: {name: 'Mongo DB', url: 'assets/mongodb-icon.svg'},
  arcore: {name: 'AR Core', url: 'assets/arcore-icon.svg'},
  mysql: {name: 'MySQL', url: 'assets/mysql-icon.svg'},

  // Links
  hostSelf: {name: 'Self hosted (can be offline)', url: 'assets/raspberrypi-icon.svg'},
  github: {name: 'Github', url: 'assets/github-icon.svg'},
  linkedIn: {name: 'LinkedIn', url: 'assets/linkedin-icon.svg'},
  googlePlayStore: {name: 'Google Play Store', url: 'assets/google-play-icon.svg'},
}
