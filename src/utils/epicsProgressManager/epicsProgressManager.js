// @flow

import { type Observable, of } from 'rxjs';
import { concat } from 'rxjs/observable/concat';
import { progressActions } from 'src/actions';

export default function epicsProgressManager(
  actionId: string,
  actions$: Array<Observable>,
): Observable {
  return concat(
    of(progressActions.setProgress(actionId)),
    ...actions$,
    of(progressActions.destroyProgress(actionId)),
  );
}
