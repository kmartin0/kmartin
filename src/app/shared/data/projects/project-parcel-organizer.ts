import {Project} from '../../models/project';
import {MainProject} from '../../models/main-project';
import {icons} from '../icons';

export const projectParcelOrganizerWeb: Project = {
  routeParam: 'parcel-organizer-web',
  title: 'Parcel Organizer Web',
  description: 'Web application for Parcel Organizer platform which lets users organize their incoming/outgoing parcels.',
  features: ['Light/dark mode.', 'Responsive design for mobile and desktop.', 'Login and register.', 'Password recovery.', 'Update account details.', 'Persist, update or delete parcels.', 'Search, order or filter the parcels.'],
  technical: [],
  imageUrls: [
    {name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_login.png?raw=true'},
    {name: 'Parcels screenshot light', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-web/parcel_organizer_web_parcels.png?raw=true'},
    {name: 'Parcels screenshot Filters', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-web/parcel_organizer_web_sort_search_dark.png?raw=true'},
    {name: 'Create parcel screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-web/parcel_organizer_web_create_parcel_dark.png?raw=true'},
    {name: 'Update account screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-web/parcel_organizer_web_sort_search_update_account_dark.png?raw=true'},
  ],
  stockImageUrl: {name: 'Parcel Organizer Web Login', url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/parcel_organizer_web_login.png?raw=true'},
  techs: [icons.web, icons.typescript, icons.angular],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/parcel-organizer-web'},
    {icon: icons.hostSelf, url: 'https://parcelorganizer.kmartin.nl'}
  ]
}

export const projectParcelOrganizerAndroid: Project = {
  routeParam: 'parcel-organizer-android',
  title: 'Parcel Organizer Android',
  description: 'Native Android application for Parcel Organizer platform which lets users organize their incoming/outgoing parcels.',
  features: ['Light/dark mode.', 'Login and register.', 'Password recovery.', 'Update account details.', 'Persist, update or delete parcels.', 'Search, order or filter the parcels.'],
  technical: ['Kotlin.', 'MVVM architecture using Architecture Components.', 'Material design using Material Components.', 'Api calls using Retrofit and RxJava.'],
  imageUrls: [
    {name: 'Login screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_login.png?raw=true'},
    {name: 'Register screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_register.png?raw=true'},
    {name: 'Parcels screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_parcels.png?raw=true'},
    {name: 'Empty state screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_parcels_empty.png?raw=true'},
    {name: 'Sort screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_sorts.png?raw=true'},
    {name: 'Sort by screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_sort_by.png?raw=true'},
    {name: 'Create parcel screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_create_parcel.png?raw=true'},
    {name: 'Update parcel screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_update_parcel.png?raw=true'},
    {name: 'Profile screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_account.png?raw=true'},
    {name: 'Profile dark screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_account_dark.png?raw=true'},
  ],
  stockImageUrl: {name: 'Login screenshot', url: 'https://github.com/kmartin0/assets/blob/master/parcel-organizer-android/parcel_organizer_android_login.png?raw=true'},
  techs: [icons.android, icons.kotlin],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/parcel-organizer-android'},
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
  techs: [icons.api, icons.java, icons.springBoot, icons.postgresql],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/parcel-organizer-api'},
    {icon: icons.hostSelf, url: 'https://api.parcelorganizer.kmartin.nl'}
  ]
}

export const parcelOrganizerMainProject: MainProject = {
  title: 'Parcel Organizer',
  projects: [projectParcelOrganizerWeb, projectParcelOrganizerAndroid, projectParcelOrganizerApi]
}
