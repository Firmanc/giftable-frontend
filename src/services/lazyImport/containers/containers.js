// @flow

import { type Element } from 'react';
import Loadable from 'react-loadable';
import { Loading } from 'components';


export default (BaseComponent: string): Element<any> => Loadable({
  loader: (): Element<any> =>
    import(`./../../../containers/${BaseComponent}`),
  loading: Loading,
});
