import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCCESS,
} from "./actions";
import { TGithubAction, TGithubStateSaga } from "./types";

const initialState: TGithubStateSaga = {
  userProfileSaga: { isLoading: false, error: null, data: null },
};

function reducer(
  state: TGithubStateSaga = initialState,
  action: TGithubAction
): TGithubStateSaga {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfileSaga: { ...state.userProfileSaga, isLoading: true },
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfileSaga: {
          ...state.userProfileSaga,
          isLoading: false,
          data: action.payload,
        },
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfileSaga: {
          ...state.userProfileSaga,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;
