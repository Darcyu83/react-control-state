import {
  getProfile,
  getProfileError,
  getProfileSuccess,
  GET_USER_PROFILE,
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { TGithubAction } from "./types";
import { GithubProfile, getUserProfile } from "../../api/github";

function* getUserProfileSaga(action: TGithubAction) {
  try {
    // const userProfile: GithubProfile = yield call(
    //   getUserProfile,
    //   action.payload
    // );
    // yield put(getProfileSuccess(userProfile));
  } catch (error: any) {
    yield put(getProfileError(error));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
