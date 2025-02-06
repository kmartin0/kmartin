import {Project} from "../../models/project";
import {registeredIcons} from "../registeredIcons";
import {MainProject} from "../../models/main-project";

export const projectBackflowCalculatorAndroid: Project = {
  routeParam: 'backflow-calculator-android',
  title: 'Backflow Calculator Android',
  description: 'Made as a hobby project for Ikea employees to streamline calculation of backflow on the work floor. The Backflow calculator simplifies the process of calculating the total boxes to be returned (Goodsflow).',
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
    {name: 'Home', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/backflow-calculator/backflow_calculator_main.png'},
    ],
  stockImageUrl:  {name: 'Home', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/backflow-calculator/backflow_calculator_main.png'},
  techs: [registeredIcons.android, registeredIcons.kotlin],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/backflow-calculator'},
    {icon: registeredIcons.googlePlayStore, url: 'https://play.google.com/store/apps/details?id=com.km.backflow.calculator'}
  ]
}

export const backflowCalculatorMainProject: MainProject = {
  title: 'Backflow Calculator',
  projects: [projectBackflowCalculatorAndroid]
}
