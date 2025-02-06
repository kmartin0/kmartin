import {Project} from "../../models/project";
import {registeredIcons} from "../registeredIcons";
import {MainProject} from "../../models/main-project";

export const projectDartsMatcherWeb: Project = {
  routeParam: 'darts-matcher-web',
  title: 'Darts Matcher Web',
  description: 'Web application for Darts Matcher platform which lets users create and play (online) darts matches against other players or bots.',
  features: ['Light/dark mode.', 'Responsive design for mobile and desktop.', 'Login and register.', 'Create and play darts matches with an online scoreboard with up to 4 players.', 'Configure and play against a darts bot.', 'Recover from wrong score inputs.', 'View match information, statistics and a recap.'],
  technical: [],
  imageUrls: [
    {name: 'Homepage', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_login_register.png'},
    {name: 'Dashboard Friend', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_friends.png'},
    {name: 'Create Match', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_create_match.png'},
    {name: 'Create Match Add Player', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_add_player.png'},
    {name: 'Create Match Add Bot', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_add_bot.png'},
    {name: 'Match Lobby', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_lobby.png'},
    {name: 'Match Scoreboard Dark', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_scoreboard_dark.png'},
    {name: 'Match Scoreboard Light', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_scoreboard_light.png'},
    {name: 'Match Information', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_match_information.png'},
    {name: 'Match Statistics', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_match_statistics.png'},
    {name: 'Match Recap', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_match_recap.png'},
  ],
  stockImageUrl: {name: 'Match Scoreboard Light', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/darts-matcher-web/darts_matcher_web_scoreboard_light.png'},
  techs: [registeredIcons.web, registeredIcons.typescript, registeredIcons.angular],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/darts-matcher-web'},
    {icon: registeredIcons.hostSelf, url: 'https://dartsmatcher.kmartin.nl'},
  ]
}

export const projectDartsMatcherApi: Project = {
  routeParam: 'darts-matcher-api',
  title: 'Darts Matcher Api',
  description: 'Api for Darts Matcher platform which lets users create and play (online) darts matches against other players or bots.',
  features: ['Authenticate and register users', 'Recover from lost passwords', 'Create darts matches with up to 4 players.', 'Create darts matches with bots.', 'Configure and play against a darts bot.', 'Recover from mistakes during matches.', 'Generate statistics for each match.'],
  technical: ['Layered architecture.', 'MongoDB.', 'Globalized error handling.', 'Localization.', 'OAuth 2 and JWT for user authentication/authorization (Spring Security).', 'Websockets'],
  imageUrls: [],
  stockImageUrl: {name: 'terminal', url: 'assets/terminal.png'},
  techs: [registeredIcons.api, registeredIcons.java, registeredIcons.springBoot, registeredIcons.websocket, registeredIcons.mongodb],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/darts-matcher-api'},
    {icon: registeredIcons.hostSelf, url: 'https://api.dartsmatcher.kmartin.nl'}
  ]
}

export const dartsMatcherMainProject: MainProject = {
  title: 'Darts Matcher',
  projects: [projectDartsMatcherWeb, projectDartsMatcherApi]
}
