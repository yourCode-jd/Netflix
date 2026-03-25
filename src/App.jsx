import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h1 className="text-3xl text-center bg-sky-700 text-white p-2">
          Netflix
        </h1>
      </section>
    </>
  );
}

export default App;
