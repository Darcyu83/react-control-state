import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCCESS,
} from "./actions";
import { TGithubAction, TGithubState } from "./types";

const initialState: TGithubState = {
  userProfile: { isLoading: false, error: null, data: null },
};

function reducer(
  state: TGithubState = initialState,
  action: TGithubAction
): TGithubState {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: { ...state.userProfile, isLoading: true },
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          isLoading: false,
          data: action.payload,
        },
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;
