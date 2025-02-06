import {Project} from "../../models/project";
import {registeredIcons} from "../registeredIcons";
import {MainProject} from "../../models/main-project";

export const projectAndroidSceneformPoly: Project = {
  routeParam: 'android-sceneform-poly',
  title: 'Android Sceneform Poly',
  description: 'Android AR application using Sceneform SDK to display .gltf or .glb 3D models fetched using the Google Poly Api.',
  features: [
    'Display .gltf or .glb 3D model on a plane.',
    'Choose one of the default examples fetched from Google Poly Api or Scan a QR code which directs to a 3D model file.',
    'Make a picture of the view.',
    'The model can be interacted with using the manipulation button which supports:',
    'Moving the model to a different location on the plane.',
    'Moving the model up or down.',
    'Rotating the model on the X-axis.',
    'Rotating the model on the Y-axis.',
    'Resizing the model.',
    ],
  technical: [],
  imageUrls: [
    {name: 'Home', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/android-sceneform-poly/sceneform_poly_example_2.jpg'},
    {name: 'AR', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/android-sceneform-poly/sceneform_poly_example_1.jpg'},
  ],
  stockImageUrl: {name: 'AR', url: 'https://raw.githubusercontent.com/kmartin0/assets/refs/heads/master/android-sceneform-poly/sceneform_poly_example_1.jpg'},
  techs: [registeredIcons.android, registeredIcons.java, registeredIcons.arcore],
  links: [
    {icon: registeredIcons.github, url: 'https://github.com/kmartin0/android-sceneform-poly'}
  ]
}

export const androidSceneformPolyMainProject: MainProject = {
  title: 'Android Sceneform Poly',
  projects: [projectAndroidSceneformPoly]
}
