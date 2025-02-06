import {Project} from "../../models/project";
import {registeredIcons} from "../registeredIcons";
import {MainProject} from "../../models/main-project";

export const projectSpringBootBoilerplateApi: Project = {
  routeParam: 'spring-boot-boilerplate-api',
  title: 'Spring Boot Boilerplate Api',
  description: 'Boilerplate project for a (REST) Api in Spring Boot.',
  features: ['Readme with detailed information on the project and the steps needed to get it up and running', 'Default endpoints showcasing the features: ', 'Save user.', 'Get Authenticated User.', 'Update User.', 'Delete User.', 'Change password.', 'Forgot Password.', 'Reset Password.'],
  technical: [
    'Global Exception Handler.',
    'Authorization and Authentication with OAuth2 using JWK signed JWT (spring security).',
    'Mysql database connection (for mongodb navigate to the mongodb boilerplate branch).',
    'Bean validation',
    'Unit tests.',
    'Lombok (requires Lombok plugin).',
    ],
  imageUrls: [],
  stockImageUrl: {name: 'terminal', url: 'assets/terminal.png'},
  techs: [registeredIcons.api, registeredIcons.java, registeredIcons.springBoot, registeredIcons.mysql, registeredIcons.mongodb],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/spring-boot-boilerplate-api'},
  ]
}

export const springBootBoilerplateApiMainProject: MainProject = {
  title: 'Spring Boot Boilerplate Api',
  projects: [projectSpringBootBoilerplateApi]
}
