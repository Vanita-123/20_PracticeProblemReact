import { useState } from "react";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isRegister, setisRegister] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [user, setuser] = useState([]);
  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleLogin = () => {
    setisRegister(!isRegister);
  };
  const handleAuth = () => {
    if (isRegister) {
      const user = user.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setisLogin(true);
      } else {
        alert("login failed");
      }
    } else {
      const newuser = { email, password };
      setuser([...user, newuser]);
      localStorage.setItem("user", JSON.stringify([...user, newuser]));
      setisLogin(true);
    }
  };
  const handlelogout = () => {
    setisLogin(false);
    setemail("");
    setpassword("");
  };
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      {isLogin ? (
        <div>
          {" "}
          <h2>
            Welcome , <span style={{ color: "green" }}>{email}</span>
          </h2>{" "}
          <button onClick={handlelogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegister ? "Login" : "Register"}</h2>
          <form>
            <h3>Login</h3>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={handleemail}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlepassword}
            />
            <button onClick={handleAuth}>
              {isRegister ? "Login" : "Register"}
            </button>
          </form>

          <p>
            {isRegister
              ? "Do you have account "
              : "Already have an account?Login"}
          </p>
          <button onClick={handleLogin}>
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
