import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [emailExist, setEmailExist] = useState(false);
  const nav = useNavigate();

  const signup = async (user) => {
    try {
      const res = await axios.post(
        "https://fake-apis-uomb.onrender.com/auth/register",
        user
      );

      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.id);
        nav("/")
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setEmailExist(true);
      } else {
        setEmailExist(false);
        console.log(error);
      }
    }
  };

  const register = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!firstName) newErrors.firstName = "first name is required!";
    if (!lastName) newErrors.lastName = "last name is required!";
    if (!username) newErrors.username = "username is required!";
    if (!email) newErrors.email = "email is required!";
    if (!password) newErrors.password = "password is required!";
    if (!passwordConfirm)
      newErrors.passwordConfirm = "password confirmation name is required!";
    if (username.length < 8)
      newErrors.usernameLength = "username most be more than 8 chars!";
    if (password.length < 8)
      newErrors.passwordLength = "passowrd most be more than 8 chars!";
    if (password !== passwordConfirm)
      newErrors.passMatch = "password confirmation doesn't match password";
    if (Object.values(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      signup({
        fullname: firstName + " " + lastName,
        username,
        email,
        password,
      });
      if (!errors && !emailExist) {
        setFirst("");
        setLast("");
        setUser("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
      }
    }
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center pt-5">
        <h2 className="pb-5 fs-1">CREATE AN ACCOUNT</h2>
        <form className="" onSubmit={register}>
          <div className="d-flex flex-column gap-md-3">
            <div className="d-flex flex-column flex-md-row gap-3">
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="first name"
                  value={firstName}
                  className="form-control rounded-0 border border-1 p-2"
                  onChange={(e) => setFirst(e.target.value)}
                />{" "}
                {errors.firstName && (
                  <span style={{ color: "red" }}>{errors.firstName}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  value={lastName}
                  className="form-control mb-3 mb-md-0 rounded-0 border border-1 p-2"
                  onChange={(e) => setLast(e.target.value)}
                />
                {errors.lastName && (
                  <span style={{ color: "red" }}>{errors.lastName}</span>
                )}
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-3">
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  className="form-control rounded-0 border border-1 p-2"
                  onChange={(e) => setUser(e.target.value)}
                />
                {errors.username && (
                  <span style={{ color: "red" }}>{errors.username}</span>
                )}

                {errors.usernameLength && (
                  <span style={{ color: "red" }}>{errors.usernameLength}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  className="form-control mb-3 mb-md-0 rounded-0 border border-1 p-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
                {emailExist && (
                  <span style={{ color: "red" }}>
                    this email already exist!
                  </span>
                )}
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-3">
              <div style={{ flex: 1 }}>
                <input
                  type="password"
                  name="name"
                  placeholder="password"
                  value={password}
                  className="form-control rounded-0 border border-1 p-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
                {errors.passwordLength && (
                  <span style={{ color: "red" }}>{errors.passwordLength}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <input
                  type="password"
                  name="conpassword"
                  placeholder="confirm password"
                  value={passwordConfirm}
                  className="form-control rounded-0 border border-1 p-2"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
                {errors.passMatch && (
                  <span className="text-danger">{errors.passMatch}</span>
                )}
              </div>
            </div>
          </div>

          <h3 className=" fw-normal mt-2 mb-3 fs-6">
            By creating account I content to the processeing of my personal data
            in accordance with the{" "}
            <p className="fs-6 fw-bold">PRIVACY POLICEY</p>
          </h3>
          <p className="pb-1">
            do you already have account{" "}
            <Link to="/login" className=" text-dark">
              login
            </Link>
          </p>
          <button
            className="btn text-light w-25 rounded-0"
            style={{ backgroundColor: "#148085" }}
          >
            CREATE
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
