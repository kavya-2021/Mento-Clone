import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";
import "./login.css"

export const Login = () => {
  const navigate = useNavigate();

  const { handleLogIn } = useContext(AppContext);

  const nextPage = () => {
    navigate("./courses/standup-comedy-101");
  };
  return (
    <div>
  
      <Link to={"/courses/standup-comedy-101/"}>


       <div id="login">

<div id="logingdiv">
 
<button className="loginBtn loginBtn--facebook">
  Login with Facebook
</button>

<button className="loginBtn loginBtn--google" >
  Login with Google
</button>

</div>
       


       </div>

      </Link>
    </div>
  );
};
