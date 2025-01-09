import { Clear, ReportProblemRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RoutingMessage = ({ show, close }) => {
  return (
    <div
      className="position-fixed text-center bg-light mw-100 p-3 rounded-2 z-3"
          style={{ top: "15%", right: show ? "5%": "-100%", transitionDuration: ".3s" }}
    >
      <Clear
        className="position-absolute top-0 end-0 m-1 fs-6 text-dark cursor-pointer"
              role="button"
              onClick={close}
      />
      <i className="fa-solid fa-triangle-exclamation fa-fade fa-3x text-amber-400"></i>
      <ReportProblemRounded
        className="fade-animation"
        style={{ color: "#f4e34b", fontSize: "50px" }}
      />
      <p className="pt-2 text-dark text-lg">Please login or signup first</p>
      <div className="d-flex justify-content-between align-items-center gap-3 pt-3">
        <Link
          to={"/login"}
                  className="text-decoration-none w-full py-1 px-3 text-white bg-primary rounded-2"
                  style={{flex: "1"}}
        >
          Login
        </Link>
        <Link
          to={"/register"}
                  className="text-decoration-none w-full py-1 px-3 text-white bg-success rounded-2"
                  style={{flex: "1"}}
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default RoutingMessage;
