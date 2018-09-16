// @flow

import { ajax } from 'rxjs/ajax';
import type { Observable, AjaxRequest } from 'rxjs';
import { API_URL, API_VERSION } from 'src/constants/api';

const DEFAULT_HEADER: Object = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default class API {
  static BASE_URL: string = `${API_URL}/${API_VERSION}`;

  static METHODS: {
    GET: string,
    POST: string,
    DELETE: string,
    PUT: string,
  } = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
  };

  static request(
    url: string,
    method: string,
    settings: AjaxRequest,
  ): Observable {
    return ajax({
      url,
      method,
      headers: settings.headers
        ? Object.assign({}, DEFAULT_HEADER, { ...settings.headers })
        : DEFAULT_HEADER,
      body: settings.body,
    });
  }

  static get(url: string, settings: Object = {}): Observable {
    return API.request(
      `${API.BASE_URL}${url}`,
      API.METHODS.GET,
      settings,
    );
  }

  static post(url: string, settings: Object = {}): Observable {
    return API.request(
      `${API.BASE_URL}${url}`,
      API.METHODS.POST,
      settings,
    );
  }

  static put(url: string, settings: Object = {}): Observable {
    return API.request(
      `${API.BASE_URL}${url}`,
      API.METHODS.PUT,
      settings,
    );
  }

  static delete(url: string, settings: Object = {}): Observable {
    return API.request(
      `${API.BASE_URL}${url}`,
      API.METHODS.DELETE,
      settings,
    );
  }
}
