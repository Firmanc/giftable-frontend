// @flow

import { withRouter } from 'react-router-dom';
import Header from './Header.view';
import generator from './Header.generator';
import enhancer from './Header.enhancer';

export default withRouter(generator(enhancer(Header)));
