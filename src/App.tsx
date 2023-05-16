import "./App.css";
import PostContainer from "./components/PostContaner";
import PostContainerCopy from "./components/PostContanerCopy";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainerCopy />
      </div>
    </div>
  );
}

export default App;
