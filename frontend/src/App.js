import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users")
      .then(res => setUser(res.data));
  }, []);

  return (
    <div>
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>{user.role}</p>
        </>
      )}
    </div>
  );
}

export default App;