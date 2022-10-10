import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <button onClick={() => setShouldShow(!shouldShow)}>
        {shouldShow ? "Hide modal" : "Show modal"}
      </button>
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      />
    </>
  );
}

export default App;
