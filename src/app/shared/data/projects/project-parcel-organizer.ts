import {Project} from '../../models/project';
import {MainProject} from '../../models/main-project';
import {registeredIcons} from '../registeredIcons';

export const projectParcelOrganizerWeb: Project = {
  routeParam: 'parcel-organizer-web',
  title: 'Parcel Organizer Web',
  description: 'Web application for Parcel Organizer platform which lets users organize their incoming/outgoing parcels.',
  features: ['Light/dark mode.', 'Responsive design for mobile and desktop.', 'Login and register.', 'Password recovery.', 'Update account details.', 'Persist, update or delete parcels.', 'Search, order or filter the parcels.'],
  technical: [],
  imageUrls: [
    {name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_login.png'},
    {name: 'Parcel Organizer Web Register', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_register.png'},
    {name: 'Parcels screenshot light', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_parcels.png'},
    {name: 'Parcels screenshot Filters', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_sort_search.png'},
    {name: 'Create parcel screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_create_parcel_dark.png'},
    {name: 'Update account screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_sort_search_update_account_dark.png'},
  ],
  stockImageUrl: {name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-web/parcel_organizer_web_login.png'},
  techs: [registeredIcons.web, registeredIcons.typescript, registeredIcons.angular],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/parcel-organizer-web'},
    {icon: registeredIcons.hostSelf, url: 'https://parcelorganizer.kmartin.nl'}
  ]
}

export const projectParcelOrganizerAndroid: Project = {
  routeParam: 'parcel-organizer-android',
  title: 'Parcel Organizer Android',
  description: 'Native Android application for Parcel Organizer platform which lets users organize their incoming/outgoing parcels.',
  features: ['Light/dark mode.', 'Login and register.', 'Password recovery.', 'Update account details.', 'Persist, update or delete parcels.', 'Search, order or filter the parcels.'],
  technical: ['Kotlin.', 'MVVM architecture using Architecture Components.', 'Material design using Material Components.', 'Api calls using Retrofit and RxJava.'],
  imageUrls: [
    {name: 'Login screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_login.png'},
    {name: 'Register screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_register.png'},
    {name: 'Parcels screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_parcels.png'},
    {name: 'Empty state screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_parcels_empty.png'},
    {name: 'Sort screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_sorts.png'},
    {name: 'Sort by screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_sort_by.png'},
    {name: 'Create parcel screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_create_parcel.png'},
    {name: 'Update parcel screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_update_parcel.png'},
    {name: 'Profile screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_account.png'},
    {name: 'Profile dark screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_account_dark.png'},
  ],
  stockImageUrl: {name: 'Login screenshot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/parcel-organizer-android/parcel_organizer_android_login.png'},
  techs: [registeredIcons.android, registeredIcons.kotlin],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/parcel-organizer-android'},
  ]
}

export const projectParcelOrganizerApi: Project = {
  routeParam: 'parcel-organizer-api',
  title: 'Parcel Organizer Api',
  description: 'REST Api for Parcel Organizer platform which lets users organize their incoming/outgoing parcels.',
  features: ['Authenticate and register.', 'Password recovery.', 'Update account details.', 'Persist, update or delete parcels.'],
  technical: ['Layered architecture.', 'Liquibase database migrations.', 'Globalized error handling.', 'PostgreSQL', 'Localization.', 'Database cache using Hibernate second level cache.', 'OAuth 2 and JWT for user authentication/authorization (spring security).'],
  imageUrls: [],
  stockImageUrl: {name: 'terminal', url: 'assets/terminal.png'},
  techs: [registeredIcons.api, registeredIcons.java, registeredIcons.springBoot, registeredIcons.postgresql],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/parcel-organizer-api'},
    {icon: registeredIcons.hostSelf, url: 'https://api.parcelorganizer.kmartin.nl'}
  ]
}

export const parcelOrganizerMainProject: MainProject = {
  title: 'Parcel Organizer',
  projects: [projectParcelOrganizerWeb, projectParcelOrganizerAndroid, projectParcelOrganizerApi]
}
