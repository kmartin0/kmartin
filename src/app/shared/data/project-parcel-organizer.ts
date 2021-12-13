import {Project} from '../models/project';
import {MainProject} from '../models/main-project';
import {icons} from './icons';

export const projectParcelOrganizerWeb: Project = {
  routeParam: 'parcel-organizer-web',
  title: 'Parcel Organizer Web',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  features: ['Lorem ipsum', 'sit amet, consectetur', 'occaecat cupidatat non proident'],
  technical: ['Lorem ipsum', 'sit amet, consectetur', 'occaecat cupidatat non proident'],
  imageUrls: [{name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_login.png'}],
  techs: [icons.web, icons.typescript, icons.angular],
  links: [
    {icon: icons.github, url: 'https://github.com'},
    {icon: icons.hostSelf, url: 'https://kmartin.nl'},
    {icon: icons.hostHeroku, url: 'https://heroku.com'}
  ]
}

export const projectParcelOrganizerAndroid: Project = {
  routeParam: 'parcel-organizer-android',
  title: 'Parcel Organizer Android',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  features: ['Lorem ipsum', 'sit amet, consectetur', 'occaecat cupidatat non proident'],
  technical: ['Lorem ipsum', 'sit amet, consectetur', 'occaecat cupidatat non proident'],
  imageUrls: [
    {name: 'Parcel Organizer Android Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/parcel_organizer_android_login.png'},
    {name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_login.png'},
    {name: 'Parcel Organizer Web Register', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_register.png'}
  ],
  techs: [icons.android, icons.kotlin],
  links: [
    {icon: icons.github, url: 'https://github.com'},
    {icon: icons.hostSelf, url: 'https://kmartin.nl'},
    {icon: icons.hostHeroku, url: 'https://heroku.com'}
  ]
}

export const projectParcelOrganizerApi: Project = {
  routeParam: 'parcel-organizer-api',
  title: 'Parcel Organizer Api',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  features: ['Lorem ipsum', 'sit amet, consectetur', 'occaecat cupidatat non proident'],
  technical: ['Lorem ipsum', 'sit amet, consectetur', 'occaecat cupidatat non proident'],
  imageUrls: [{name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_login.png'}],
  techs: [icons.api, icons.java, icons.springBoot],
  links: [
    {icon: icons.github, url: 'https://github.com'},
    {icon: icons.hostSelf, url: 'https://kmartin.nl'},
    {icon: icons.hostHeroku, url: 'https://heroku.com'}
  ]
}

export const parcelOrganizerMainProject: MainProject = {
  title: 'Parcel Organizer',
  projects: [projectParcelOrganizerWeb, projectParcelOrganizerAndroid, projectParcelOrganizerApi]
}

export const parcelOrganizerProject1: MainProject = {
  title: 'Parcel Organizer 1',
  projects: [projectParcelOrganizerWeb, projectParcelOrganizerAndroid]
}

export const parcelOrganizerProject2: MainProject = {
  title: 'Parcel Organizer 2',
  projects: [projectParcelOrganizerWeb]
}
