
const Register = () => {
  return (
    <div className="vh-100 position-relative">
      <div
        className="position-absolute bg-white p-3"
        style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h2 className="pb-3 fs-1">CREATE AN ACCOUNT</h2>
        <form className="">
          <div className="d-flex flex-column flex-md-row align-items-center gap-3">
            <div style={{ flex: "1" }}>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
              <input
                type="text"
                name="username"
                placeholder="username"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
              <input
                type="password"
                name="name"
                placeholder="password"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
            </div>
            <div style={{ flex: "1" }}>
              <input
                type="text"
                name="lastname"
                placeholder="lastname"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
              <input
                type="password"
                name="conpassword"
                placeholder="confirm password"
                className="form-control mb-3 rounded-0 border border-1 p-2"
              />
            </div>
          </div>

          <p className="mt-2 mb-4 fs-6">
            By creating account I content to the processeing of my personal data
            in accordance with the <h4 className="fs-6">PRIVACY POLICEY</h4>
          </p>
          <button
            className="btn text-light w-25 rounded-0"
            style={{ backgroundColor: "#148085" }}
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;