
const Login = () => {
  return (
    <div className="vh-100 position-relative">
      <div
        className="position-absolute bg-white p-3"
        style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h2 className="pb-3 fs-1">SIGNIN YOUR ACCOUNT</h2>
        <form className="">
          <div className="d-flex flex-column gap-3">
            <div style={{ flex: "1" }}>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
            </div>
            <div style={{ flex: "1" }}>
              <input
                type="password"
                name="name"
                placeholder="password"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
            </div>
          </div>
          <button
            className="btn text-light w-25 rounded-0"
            style={{ backgroundColor: "#148085" }}
          >
            SIGNIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;