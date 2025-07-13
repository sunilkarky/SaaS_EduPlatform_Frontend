import { useState } from "react";
import { IloginData } from "./login.types";

function Login() {
  const [data, setData] = useState<IloginData>({
    email: "",
    password: "",
  });
  return <h1>Login</h1>;
}
export default Login;
