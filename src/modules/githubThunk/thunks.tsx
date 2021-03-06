import { ThunkAction } from "redux-thunk";
import { getProfile, getProfileSuccess, getProfileError } from "./actions";
import { getUserProfileAPI } from "../../api/github";
import { TGithubAction } from "./types";
import { TRootReducer } from "../index";

export function getUserProfileThunk(
  username: string
): ThunkAction<void, TRootReducer, null, TGithubAction> {
  return async (dispatch) => {
    dispatch(getProfile());
    try {
      const userProfile = await getUserProfileAPI(username);
      dispatch(getProfileSuccess(userProfile));
    } catch (error: any) {
      dispatch(getProfileError(error));
    }
  };
}
