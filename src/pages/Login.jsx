import { useNavigate } from "react-router-dom";
import LoginForm from "../features/Authentication/LoginForm";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <header className="bg-[#004225] w-full h-10%" />
      <main className="bg-[#e3e3d0] flex justify-around h-80%">
        <Logo type="loginForm" />
        <div className="flex flex-col items-center w-96 mr-6 my-auto">
          <h4 className="text-3xl font-bold mb-16">ورود به سیستم</h4>
          <LoginForm />
          <Button
            label="ورود به عنوان مهمان "
            color="green"
            onClick={() => navigate("/home")}
          />
        </div>
      </main>
      <footer className="bg-[#004225] w-full h-10%" />
    </div>
  );
}

export default Login;
