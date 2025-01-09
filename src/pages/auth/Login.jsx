import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState(false);

  const navigate = useNavigate();

  const signin = async (user) => {
    try {
      const res = await axios.post("http://localhost:4000/auth/login", user);

      if (res.status === 200) {
        const data = res.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.id);
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setInvalid(true);
      } else {
        setInvalid(false);
        console.log(error);
      }
    }
  };

  const login = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!email) newErrors.email = "email is required!";
    if (!password) newErrors.password = "password is required!";

    if (Object.values(newErrors).length) {
      setErrors(newErrors);
    } else {
      setErrors({});
      signin({ email, password });
    }
  };
  return (
    <div className="container d-flex flex-column align-items-center gap-3 pt-5">
      <h2 className="pb-3 fs-1">SIGNIN YOUR ACCOUNT</h2>
      <form onSubmit={login} className="login-form d-flex flex-column gap-3">
        {invalid && <span style={{ color: "red" }}>invalid user information..!</span>}
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            className="form-control rounded-0 border border-1 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <input
            type="password"
            name="name"
            value={password}
            placeholder="password"
            className="form-control rounded-0 border border-1 p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button
          className="btn text-light w-25 rounded-0"
          style={{ backgroundColor: "#148085" }}
        >
          SIGNIN
        </button>
      </form>
    </div>
  );
};

export default Login;
