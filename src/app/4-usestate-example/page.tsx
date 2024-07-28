"use client"

import { useState } from "react";

type UserType = {
  name: string;
  sessionId: number;
}

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>();

  // input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  // onclick button
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random()
    })
  }

  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} loggend in`
      ): (
        <form>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <button onClick={handleClick}>Login</button>
      </form>
      )}
      
    </div>
  );
}

export default UseStateExample;