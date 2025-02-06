import {Link} from '../models/link';
import {registeredIcons} from './registeredIcons';

export const links: { [name: string]: Link } = {
  github: {icon: registeredIcons.github, url: 'https://github.com/kmartin0'},
  linkedIn: {icon: registeredIcons.linkedIn, url: 'https://linkedin.com/in/pk-martin'}
}
