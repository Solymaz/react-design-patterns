import { UserInfo } from "./UserInfo";
import { printProps } from "./printProps";

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return <UserInfoWrapped a={1} b="Hi" />;
}

export default App;
