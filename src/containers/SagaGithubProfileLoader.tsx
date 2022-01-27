import { useDispatch, useSelector } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { TRootReducer } from "../modules";
import { getProfile } from "../modules/githubSaga/actions";

function SagaGithubProfileLoader() {
  const { isLoading, error, data } = useSelector(
    (state: TRootReducer) => state.githubSaga.userProfileSaga
  );

  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    // send saga action creator as parameter to dispatch
    dispatch(getProfile(username));
  };

  return (
    <>
      <h1>SagaGithubProfileLoader</h1>
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
export default SagaGithubProfileLoader;
