// @flow

import { AUTH_LOGIN } from 'constants/auth';
import { authActions, logActions } from 'actions';
import API from 'services/api';
import { Observable, ActionsObservable } from 'rxjs';
import { Action } from 'types/actions';
import { Login, Auth } from 'types/auths';
import { toAuthData, toErrorMessage } from '../transformers';

const login: Function = (action$: ActionsObservable): Auth =>
  action$
    .ofType(AUTH_LOGIN)
    .mergeMap((action: Action<Login>): Auth => {
      const url: string = '/auth/login';
      const hash: string = Buffer
        .from(`${action.payload.email}:${action.payload.password}`)
        .toString('base64');
      const headers: Object = {
        Authorization: `Basic ${hash}`,
      };

      return API
        .post(url, { headers })
        .map((payload: Object): Object =>
          authActions.setAuth(toAuthData(payload.response)))
        .catch((error: Object): Object =>
          Observable.of(logActions.addErrorLog(toErrorMessage(error.response))));
    });

export default login;
