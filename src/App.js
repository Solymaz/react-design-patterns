import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWrapped = withUser(UserInfo, "234");

function App() {
  return <UserInfoWrapped />;
}

export default App;
