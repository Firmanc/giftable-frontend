// @flow

import enhancer from './Login.enhancer';
import generator from './Login.generator';
import Login from './Login.view';

export default generator(enhancer(Login));
