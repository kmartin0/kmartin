import {Project} from "../../models/project";
import {icons} from "../icons";
import {MainProject} from "../../models/main-project";

export const projectDartsMatcherWeb: Project = {
  routeParam: 'darts-matcher-web',
  title: 'Darts Matcher Web',
  description: 'Web application for Darts Matcher platform which lets users create and play (online) darts matches against other players or bots.',
  features: ['Light/dark mode.', 'Responsive design for mobile and desktop.', 'Login and register.', 'Create and play darts matches with an online scoreboard with up to 4 players.', 'Configure and play against a darts bot.', 'Recover from wrong score inputs.', 'View match information, statistics and a recap.'],
  technical: [],
  imageUrls: [
    {name: 'Homepage', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_login_register.png?raw=true'},
    {name: 'Dashboard Friend', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_friends.png?raw=true'},
    {name: 'Create Match', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_create_match.png?raw=true'},
    {name: 'Create Match Add Player', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_add_player.png?raw=true'},
    {name: 'Create Match Add Bot', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_add_bot.png?raw=true'},
    {name: 'Match Lobby', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_lobby.png?raw=true'},
    {name: 'Match Scoreboard Dark', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_scoreboard_dark.png?raw=true'},
    {name: 'Match Scoreboard Light', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_scoreboard_light.png?raw=true'},
    {name: 'Match Information', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_match_information.png?raw=true'},
    {name: 'Match Statistics', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_match_statistics.png?raw=true'},
    {name: 'Match Recap', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_match_recap.png?raw=true'},
  ],
  stockImageUrl: {name: 'Match Scoreboard Light', url: 'https://github.com/kmartin0/assets/blob/master/darts-matcher-web/darts_matcher_web_scoreboard_light.png?raw=true'},
  techs: [icons.web, icons.typescript, icons.angular],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/darts-matcher-web'},
    {icon: icons.hostSelf, url: 'https://dartsmatcher.kmartin.nl'},
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
  techs: [icons.api, icons.java, icons.springBoot, icons.websocket, icons.mongodb],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/darts-matcher-api'},
    {icon: icons.hostSelf, url: 'https://api.dartsmatcher.kmartin.nl'}
  ]
}

export const dartsMatcherMainProject: MainProject = {
  title: 'Darts Matcher',
  projects: [projectDartsMatcherWeb, projectDartsMatcherApi]
}
