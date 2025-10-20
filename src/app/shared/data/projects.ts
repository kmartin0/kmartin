import {parcelOrganizerMainProject} from './projects/project-parcel-organizer';
import {MainProject} from '../models/main-project';
import {dartsMatcherMainProject} from "./projects/project-darts-matcher";
import {androidSceneformPolyMainProject} from "./projects/project-android-sceneform-poly";
import {musicPlayerAndroidMainProject} from "./projects/project-music-player-android";
import {civilianCprMainProject} from "./projects/project-civilian-cpr";
import {backflowCalculatorMainProject} from "./projects/project-backflow-calculator";
import {springBootBoilerplateApiMainProject} from "./projects/project-spring-boot-boilerplate-api";
import {dartsMatcherV2MainProject} from './projects/project-darts-matcher-v2';

export const myMainProjects: MainProject[] = [
  dartsMatcherV2MainProject,
  parcelOrganizerMainProject,
  dartsMatcherMainProject,
  springBootBoilerplateApiMainProject,
  civilianCprMainProject,
  backflowCalculatorMainProject,
  androidSceneformPolyMainProject,
  musicPlayerAndroidMainProject,
]
