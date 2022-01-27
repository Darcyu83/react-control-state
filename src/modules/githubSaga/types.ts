import { GithubProfile } from "../../api/github";
import { getProfile, getProfileError, getProfileSuccess } from "./actions";

export type TGithubAction =
  | ReturnType<typeof getProfile>
  | ReturnType<typeof getProfileSuccess>
  | ReturnType<typeof getProfileError>;

export type TGithubStateSaga = {
  userProfileSaga: {
    isLoading: boolean;
    error: any | null;
    data: GithubProfile | null;
  };
};
