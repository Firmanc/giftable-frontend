// @flow

import { type ActionsObservable, type Observable, of } from 'rxjs';
import { concat } from 'rxjs/observable/concat';
import {
  catchError,
  mergeMap,
  switchMap,
  debounceTime,
  filter,
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { push } from 'react-router-redux';
import { authActions, logActions } from 'src/actions';
import API from 'src/services/api';
import { Action } from 'src/types/actions';
import { AUTH_LOGIN } from 'src/constants/auth';
import { LOGIN_CONTAINER } from 'src/constants/containers';
import { LoginReq, Auth } from 'src/types/auths';
import { epicsProgressManager, objectHelper } from 'src/utils';
import { toAuthData, toErrorMessage } from '../transformers';

function postLogin(headers: string, url: string): Observable {
  return API.post(url, { headers }).pipe(
    mergeMap((payload: Object): Observable => concat(
      of(authActions.setAuth(toAuthData(payload.response))),
      of(push('/dashboard')),
    )),
    catchError((error: Object): Observable => of(logActions.addErrorLog({
      message: toErrorMessage(error.response),
      componentId: LOGIN_CONTAINER,
    }))),
  );
}

const login: Function = (action$: ActionsObservable): Auth => action$.pipe(
  ofType(AUTH_LOGIN),
  filter((action: Object): boolean => objectHelper.isAllValuesValid(action.payload)),
  debounceTime(500),
  switchMap((action: Action<LoginReq>): Observable => {
    const url: string = '/auth/login';
    const hash: string = Buffer
      .from(`${action.payload.email}:${action.payload.password}`)
      .toString('base64');
    const headers: Object = {
      Authorization: `Basic ${hash}`,
    };

    return epicsProgressManager(AUTH_LOGIN, [postLogin(headers, url)]);
  }),
);

export default login;
