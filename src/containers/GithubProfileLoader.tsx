import { useDispatch, useSelector } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { TRootReducer } from "../modules";
import { getUserProfileThunk } from "../modules/githubThunk";

function GithubProfileLoader() {
  const { isLoading, error, data } = useSelector(
    (state: TRootReducer) => state.github.userProfile
  );

  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!!</p>}
      {data && (
        <GithubProfileInfo
          name={data.name}
          thumbnail={data.avatar_url}
          bio={data.bio}
          blog={data.blog}
        />
      )}
    </>
  );
}
export default GithubProfileLoader;
