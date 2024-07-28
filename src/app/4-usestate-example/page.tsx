"use client"

import { useState } from "react";

const UseStateExample = () => {
  const [username, setUsername] = useState();
  const [user, setUser] = useState();

  return (
    <div className="useStateExample">
      <form>
        <input type="text" placeholder="Username" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default UseStateExample;