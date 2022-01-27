import { GithubProfile } from "../../api/github";

//actions
export const GET_USER_PROFILE = "githubSaga/GET_USER_PROFILE" as const;
export const GET_USER_PROFILE_SUCCESS =
  "githubSaga/GET_USER_PROFILE_SUCCESS" as const;
export const GET_USER_PROFILE_ERROR =
  "githubSaga/GET_USER_PROFILE_ERROR" as const;

//action creators
export const getProfile = (payload: string) => ({
  type: GET_USER_PROFILE,
  payload,
});
export const getProfileSuccess = (payload: GithubProfile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload,
});
export const getProfileError = (payload: string) => ({
  type: GET_USER_PROFILE_ERROR,
  payload,
});
