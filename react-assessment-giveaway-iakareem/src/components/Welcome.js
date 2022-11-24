import { useNavigate } from "react-router-dom";


const Welcome = () => {
  const navigate = useNavigate()

  const onSignUp = () => {
    navigate("/register")
  }

  return (
    <div className="center">
      <h1>Welcome</h1>
      <button onClick={onSignUp}>Sign up</button>
    </div>
  );
}

export default Welcome;
