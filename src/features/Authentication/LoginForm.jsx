import { useState } from "react";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full pb-10">
      <FormRowVertical label={"ایمیل"}>
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full rounded-xl border border-gray-400 focus:outline-none focus:border-gray-600 h-10 pl-4"
        />
      </FormRowVertical>
      <FormRowVertical label={"رمز عبور"} >
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="w-full rounded-xl border border-gray-400 focus:outline-none focus:border-gray-500 h-10 pl-4"
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button label="ورود" disabled={isLoading} color="green">
        </Button>
      </FormRowVertical>
    </form>
  );
}

export default LoginForm;
