import { useNavigate,Link } from "react-router-dom"
export const Login=()=>
{
    const navigate=useNavigate()   
    const nextPage = () => {
    navigate("./courses/standup-comedy-101");
  };

    return(<div>
        <Link to={"/courses/standup-comedy-101/"}>
        <button>google</button>
        <button>facebook</button>
        </Link>
    </div>)
}