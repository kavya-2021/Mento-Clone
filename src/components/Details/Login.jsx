import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const { handleLogIn } = useContext(AppContext);

  const nextPage = () => {
    navigate("./courses/standup-comedy-101");
  };

  return (
    <div>
      <Link to={"/courses/standup-comedy-101/"}>
        <button onClick={handleLogIn}>google</button>
        <button onClick={handleLogIn}>facebook</button>
      </Link>
    </div>
  );
};
