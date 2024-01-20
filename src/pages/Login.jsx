import LoginForm from "../features/Authentication/LoginForm";
import Logo from "../ui/Logo";
function Login() {
  return (
    <>
    <div className="w-full h-screen">
      <header className="bg-[#004225] w-full h-10%" />
      <main className="bg-[#e3e3d0] flex justify-around h-80%">
        <Logo/>
        <div className="flex flex-col items-center w-96 mr-6 my-auto">
          <h4 className="text-3xl font-bold mb-16">ورود به سیستم</h4>
          <LoginForm />
        </div>
      </main>
      <footer className="bg-[#004225] w-full h-10%"/>
    </div>
    </>
  );
}

export default Login;
