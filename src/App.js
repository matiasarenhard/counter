import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
  <>
      <h1>Contador: {count}</h1>
      
    <button>+</button>
  </>
  );
}

export default App;
