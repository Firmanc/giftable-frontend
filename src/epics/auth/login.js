// @flow

import { AUTH_LOGIN } from 'constants/auth';
import { authActions, logActions } from 'actions';
import API from 'services/api';
import type { ActionsObservable, Observable } from 'rxjs';
import { concat } from 'rxjs/observable/concat';
import { of } from 'rxjs/observable/of';
import { push } from 'react-router-redux';
import { Action } from 'types/actions';
import { LoginReq, Auth } from 'types/auths';
import { toAuthData, toErrorMessage } from '../transformers';

const login: Function = (action$: ActionsObservable): Auth =>
  action$
    .ofType(AUTH_LOGIN)
    .mergeMap((action: Action<LoginReq>): Auth => {
      const url: string = '/auth/login';
      const hash: string = Buffer
        .from(`${action.payload.email}:${action.payload.password}`)
        .toString('base64');
      const headers: Object = {
        Authorization: `Basic ${hash}`,
      };

      return API
        .post(url, { headers })
        .mergeMap((payload: Object): Observable => concat(
          of(authActions.setAuth(toAuthData(payload.response))),
          of(push('/dashboard')),
        ))
        .catch((error: Object): Observable =>
          of(logActions.addErrorLog(
            toErrorMessage(error.response),
            action.payload.componentId,
          )));
    });

export default login;
