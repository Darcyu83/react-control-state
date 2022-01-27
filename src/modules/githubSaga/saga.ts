import {
  getProfile,
  getProfileError,
  getProfileSuccess,
  GET_USER_PROFILE,
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { TGithubAction } from "./types";
import { GithubProfile, getUserProfileAPI } from "../../api/github";

function* getUserProfileSaga(action: ReturnType<typeof getProfile>) {
  try {
    const userProfile: GithubProfile = yield call<typeof getUserProfileAPI>(
      getUserProfileAPI,
      action.payload
    );
    yield put(getProfileSuccess(userProfile));
  } catch (error: any) {
    yield put(getProfileError(error));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}

/*

No overload matches this call.
  The last overload gave the following error.
    Argument of type '<TopicData>(url: string) => Promise<TopicData>' is not assignable to parameter of type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }'.
      Type '<TopicData>(url: string) => Promise<TopicData>' is missing the following properties from type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }': context, fnts(2769)
effects.d.ts(499, 17): The last overload is declared here.
*/
