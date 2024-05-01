import { useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import Try from "./components/Try";
import Background from "./components/Background";

export default function App() {
  const [res, setRes] = useState(0);
  return (
    <div className="App">
      <Input setRes={setRes} />
      <Display value={res} />
      {/* <Try/> */}
      {/* <Background/> */}
    </div>
  );
}
