import {Project} from "../../models/project";
import {registeredIcons} from "../registeredIcons";
import {MainProject} from "../../models/main-project";

export const projectCivilianCprAndroid: Project = {
  routeParam: 'civilian-cpr-android',
  title: 'Civilian Cpr Android',
  description: 'Made as a hobby project. A Companion app which improves the speed at which a user can assist someone with cpr after receiving a text message from The Hartstichting. Tapping the notification immediately opens Google Maps with directions to an aed and the person in need.',
  features: [
    'Light/dark mode from global device settings.',
    'Intercept sms messages.',
    'Persist sms messages from the cpr call number (hartstichting)',
    'Display push notification for the incoming cpr messages.',
    'When clicking the notification open google maps with the waypoints to the cpr location including possible aed waypoints.',
    'Display all messages in the app ordered by date with option to share, (batch) delete, copy or open directions in google maps.',
  ],
  technical: [
    'Kotlin.',
    'MVVM Architecture using Architecture Components.',
    'Single Activity with navigation between fragments using Navigation Components.',
    'Material design using Material Components.',
    'Dependency injection using Hilt.',
    'Local storage using Room with Coroutines for background operations.'
  ],
  imageUrls: [
    {name: 'Notification', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_notification.png'},
    {name: 'Google Maps Directions', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_google_maps.png'},
    {name: 'Empty State', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_empty_state.png'},
    {name: 'Empty State Dark', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_empty_state_dark.png'},
    {name: 'Messages', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_messages.png'},
    {name: 'Messages Dark', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_messages_dark.png'},
    {name: 'Messages Context Menu', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_message_context_menu.png'},
    {name: 'Messages Delete Action Mode', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_action_mode_delete.png'},
  ],
  stockImageUrl:     {name: 'Notification', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/civilian-cpr/Civilian_cpr_notification.png'},
  techs: [registeredIcons.android, registeredIcons.kotlin],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/civilian-cpr'}
  ]
}

export const civilianCprMainProject: MainProject = {
  title: 'Civilian Cpr',
  projects: [projectCivilianCprAndroid]
}
