// @flow

import 'rxjs/add/operator/mergeMap';
import type { ActionsObservable, Observable } from 'rxjs';
import { concat } from 'rxjs/observable/concat';
import { of } from 'rxjs/observable/of';
import { catchError, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { push } from 'react-router-redux';
import { authActions, logActions } from 'src/actions';
import API from 'src/services/api';
import { Action } from 'src/types/actions';
import { AUTH_LOGIN } from 'src/constants/auth';
import { LOGIN_CONTAINER } from 'src/constants/containers';
import { LoginReq, Auth } from 'src/types/auths';
import { toAuthData, toErrorMessage } from '../transformers';

const login: Function = (action$: ActionsObservable): Auth => action$.pipe(
  ofType(AUTH_LOGIN),
  mergeMap((action: Action<LoginReq>): Auth => {
    const url: string = '/auth/login';
    const hash: string = Buffer
      .from(`${action.payload.email}:${action.payload.password}`)
      .toString('base64');
    const headers: Object = {
      Authorization: `Basic ${hash}`,
    };

    return API.post(url, { headers }).pipe(
      mergeMap((payload: Object): Observable => concat(
        of(authActions.setAuth(toAuthData(payload.response))),
        of(push('/dashboard')),
      )),
      catchError((error: Object): Observable => of(logActions.addErrorLog(
        toErrorMessage(error.response),
        LOGIN_CONTAINER,
      ))),
    );
  }),
);

export default login;
