import { useState, useEffect } from "react";

// generally controlled components are preferred  bcs they are more reusable and they are easier to test
// when we aren't relying on the onSubmit event, we have a regular button inside the form instead of a input of type submit
export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    if (name.length < 2) {
      setError("at least 2");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        onChange={(e) => setHairColor(e.target.value)}
        value={hairColor}
      />
      <button>Submit</button>
    </form>
  );
};
