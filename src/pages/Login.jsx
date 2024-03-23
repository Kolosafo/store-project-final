import { useState } from "react";
import { authenticateUser } from "../utils";

const Login = ({ setUser, setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const getUser = async () => {
      const response = await authenticateUser(email, password);
      // eslint-disable-next-line no-unused-expressions
      response
        ? (setUser(response), setIsLogged(true))
        : setErrorMsg("INVALID EMAIL OR PASSWORD");

      console.log("RESPONSE", response);
      setLoading(false);
    };

    getUser();
  };
  return (
    <form className="login-form">
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="email" className="login-label">
        Email
      </label>
      <input
        type="text"
        name="email"
        className="login-inp"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="login-inp"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={handleLogin}
        disabled={loading ? true : false}
      >
        {!loading ? "Submit" : "Loading..."}
      </button>
    </form>
  );
};
export default Login;
