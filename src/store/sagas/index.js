import { all, call, put, fork } from 'redux-saga/effects';
import { watchMostPopularVideos } from './video';

export default function* () {
    yield all([
        fork(watchMostPopularVideos)
    ]);
}

/* Entity must have a success, failure and request method (request returns a promise). */

export function* fetchEntity(request, entity, ...args) {
    try {
        const response = yield call(request);
        // The result object is directly returned and we throw away the headers and status text here.
        // If the status and headers are needed, then instead of returning response.result, we return just response.
        yield put(entity.success(response.result, ...args));
    } catch (error) {
        yield put(entity.failure(error, ...args));
    }
}