import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./Router/AppRouter";
import PrivateRouter from "./Router/PrivateRouter";
import Cookies from 'js-cookie';
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { userinfo, userstatus } = useSelector((state)=> state.userInfo)
  // console.log(userstatus);
  // const [user, setUser] = useState(Cookies.get("userStatus")==="true" ? true : false)
  // const [userinfo, setUserinfo] = useState(user ? JSON.parse(Cookies.get('user')) : [])
  const [token, setToken] = useState(userstatus ? Cookies.get('token') : "")
  // useEffect(() => {
  //   console.log(Cookies.get("user"))
  //   console.log(Cookies.get("userStatus"))
  //   console.log(Cookies.get("token"))
  //   console.log(user);
  //   console.log(userinfo);
  //   console.log(token);

  // }, [])
  
  return (
    <div className="app">
      {!userstatus ? (
        <PrivateRouter
          user={userstatus}
          // setUser={setUser}
          userinfo={userinfo}
          // setUserinfo={setUserinfo}
          token={token}
          setToken={setToken}
        />
      ) : (
        <AppRouter
          user={userstatus}
          // setUser={setUser}
          userinfo={userinfo}
          // setUserinfo={setUserinfo}
          token={token}
          setToken={setToken}
        />
      )}
      {/* <AppRouter/> */}
    </div>
  );
}

export default App;
