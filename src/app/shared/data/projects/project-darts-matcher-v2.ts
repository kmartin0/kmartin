import {MainProject} from '../../models/main-project';
import {Project} from '../../models/project';
import {registeredIcons} from '../registeredIcons';

export const projectDartsMatcherV2Web: Project = {
  routeParam: 'darts-matcher-web-v2',
  title: 'Darts Matcher Web V2',
  description: 'Web application for Darts Matcher platform which lets users create and play (online) darts matches against other players or bots.',
  features: ['Light/dark mode.', 'Responsive design for mobile and desktop.', 'Create and play darts matches with an online scoreboard for up to 4 players.', 'Configure and play against a darts bot.', 'Recover from wrong score inputs.', 'View match information, statistics and a timeline.'],
  technical: [],
  imageUrls: [
    {name: 'Homepage', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/home.png'},
    {name: 'Match Page', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/match_page_light.png'},
    {name: 'Match Page Dark', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/match_page_dark.png'},
    {name: 'Match Information', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/match_information.png'},
    {name: 'Match Statistics', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/match_statistics.png'},
    {name: 'Match Timeline', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/match_timeline.png'},
  ],
  stockImageUrl: {name: 'Match Page', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-v2/match_page_light.png'},
  techs: [registeredIcons.web, registeredIcons.typescript, registeredIcons.angular],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/darts-matcher-web-v2'},
    {icon: registeredIcons.hostSelf, url: 'https://dartsmatcherv2.kmartin.nl'},
  ]
}

export const projectDartsMatcherV2Api: Project = {
  routeParam: 'darts-matcher-api-v2',
  title: 'Darts Matcher Api V2',
  description: 'Api for Darts Matcher platform which lets users create and play (online) darts matches against other players or bots.',
  features: ['Create darts matches for up to 4 players.', 'Configure and play against a darts bot.', 'Recover from mistakes during matches.', 'Generate statistics for each match.'],
  technical: ['Layered architecture.', 'MongoDB.', 'Globalized error handling.', 'Localization.', 'Websockets'],
  imageUrls: [],
  stockImageUrl: {name: 'terminal', url: 'assets/terminal.png'},
  techs: [registeredIcons.api, registeredIcons.java, registeredIcons.springBoot, registeredIcons.websocket, registeredIcons.mongodb],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/darts-matcher-api-v2'},
    {icon: registeredIcons.hostSelf, url: 'https://api.dartsmatcherv2.kmartin.nl'}
  ]
}

export const dartsMatcherV2MainProject: MainProject = {
  title: 'Darts Matcher V2',
  projects: [projectDartsMatcherV2Web, projectDartsMatcherV2Api]
};
