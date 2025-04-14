import { useState } from "react";

function userprofile() {
  const [IsOnline, setIsOnline] = useState(false);

  return (
    <>
      <div className="box">
        <p>User is {IsOnline ? "hors ligne" : "en ligne"}</p>

        <button
          onClick={() => {
            setIsOnline(!IsOnline);
          }}
        >
          click to change user status
        </button>
      </div>
    </>
  );
}

export default userprofile;
