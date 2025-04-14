import { useState } from "react";
import "./App.css";
import UserContext from "./assets/components/UserContext";
import UserProfile from "./assets/components/UserProfile";

function App() {
  const { user, setUser } = useState(false);

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}

export default App;
