import { ChangeEvent, FormEvent, useState } from "react";
import { IRegisterData } from "./register.types";
import { registerUser } from "@/lib/store/auth/authSlice";

function Register() {
  const [data, setData] = useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
  });
  const handleRegisterDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    //kunma k type hano yasari aauxa
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: [value],
    });
  };
  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    //call function in slice to make api call
    registerUser(data);
  };
  return <h1>Register</h1>;
}
export default Register;
