import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const SetpOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>{" "}
    <button onClick={() => goToNext({ name: "Sol" })}> Next </button>
  </>
);
const SetpTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>{" "}
    <button onClick={() => goToNext({ age: "22" })}> Next </button>
  </>
);
const SetpThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>{" "}
    <button onClick={() => goToNext({ hairColor: "blonde" })}> Next </button>
  </>
);

function App() {
  return (
    <UncontrolledOnboardingFlow onFinish={(data) => console.log(data)}>
      <SetpOne />
      <SetpTwo />
      <SetpThree />
    </UncontrolledOnboardingFlow>
  );
}

export default App;
