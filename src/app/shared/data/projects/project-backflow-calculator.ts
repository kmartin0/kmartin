import {Project} from "../../models/project";
import {icons} from "../icons";
import {MainProject} from "../../models/main-project";

export const projectBackflowCalculatorAndroid: Project = {
  routeParam: 'backflow-calculator-android',
  title: 'Backflow Calculator Android',
  description: 'Made as a hobby project to streamline calculation of backflow on the work floor. The Backflow calculator simplifies the process of calculating the total boxes to be returned (Goodsflow).',
  features: [
    'Calculate On The Floor using Supply and SGF.',
    'Calculate Fill Amount using ASSQ and Flex.',
    'Calculate Backflow using MUPQ Per Box.',
    'Calculate Total Boxes To Be Returned using the calculated fields from above (On The Floor, Fill Amount, and Backflow).',
    'Receive update notification when a new release is made on Github.',
    'Generate QR code which directs to the latest release on Github.',
  ],
  technical: [
    'Kotlin.',
    'MVVM Architecture using Architecture Components.'
  ],
  imageUrls: [
    {name: 'Home', url: 'https://github.com/kmartin0/assets/blob/master/backflow-calculator/backflow_calculator_main.png?raw=true'},
    ],
  stockImageUrl:  {name: 'Home', url: 'https://github.com/kmartin0/assets/blob/master/backflow-calculator/backflow_calculator_main.png?raw=true'},
  techs: [icons.android, icons.kotlin],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/backflow-calculator'},
    {icon: icons.googlePlayStore, url: 'https://play.google.com/store/apps/details?id=com.km.backflow.calculator'}
  ]
}

export const backflowCalculatorMainProject: MainProject = {
  title: 'Backflow Calculator',
  projects: [projectBackflowCalculatorAndroid]
}
