import UserForm from "@/components/UserForm";
import React, { useEffect, useState } from "react";
// import UserForm from "../../Component/UserForm";
import logo from "../../images/logo.webp";
// import Button from "../../Helper/Button";
import { json, redirect, useNavigate, useActionData } from "react-router-dom";
import api from "@/service/api";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";
import { Button } from "@/components/ui/button";
// import api from "../../service/api";
// import { useDispatch } from "react-redux";
// import { login } from "../../store/authSlice";
import { toast } from "react-toastify";

const LoginAuth = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actionValue = useActionData();
  // console.log("******actionValue", actionValue)
  const userErr = actionValue?.userErr || null
  const username = actionValue?.actionData?.username
  const token = actionValue?.actionData?.token || null
  const email = actionValue?.actionData?.email || null
  console.log("___________token",email, token)
  const errors = actionValue?.errors || {};
  // asAS!@12



  const loginFields = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email address",
      type: "email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
      errorMessage: "Email is invalid",
    },
    {
      name: "password",
      placeholder: "Enter password",
      label: "Password",
      type: "password",
      required: true,
      pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage:
        "Password must be alphanumeric, include at least one special character, and be at least 7 characters long",
    },
  ];

  useEffect(() => {
    if (token) {
      const dispatchData = { token, username: username, email:email }
      dispatch(login(dispatchData))
      navigate("/")
    }
  }, [token])

  const submitHandler = (formData) => {
    console.log("formData", formData);
    setFormData(formData);
  };

  return (
    <>
      <div
        style={{ height: "90vh" }}
        className="login-container grid place-items-center bg-gray-900 "
      >
        <div className="login-section border-black border-4 flex justify-evenly align-middle items-center bg-white  h-4/5 w-4/5 rounded-lg">
          <div className="login w-1/3 ">
            <UserForm
              userErr={userErr}
              errors={errors}
              className=""
              fields={loginFields}
              formTitle={"LOGIN"}
              onSubmit={submitHandler}
              btnTitle="Login"
            >
              <Button
                onClick={() => navigate("/auth/signin")}
                className=" text-white bg-gray-700 rounded-xl"
                type="button"
              >
                Create new user
              </Button>
            </UserForm>
          </div>
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAuth;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");


  const formColl = {
    email,
    password,
  };

  const loginFields = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email address",
      type: "email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
      errorMessage: "Email is invalid",
    },
    {
      name: "password",
      placeholder: "Enter password",
      label: "Password",
      type: "password",
      required: true,
      pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage:
        "Password must be alphanumeric, include at least one special character, and be at least 7 characters long",
    },
  ];

  const validateForm = (form) => {
    const errors = {};
    loginFields.forEach((field, ind) => {
      if (field.name == "email" || field.name == "password") {
        if (field.required && !form[field.name]) {
          errors[field.name] = field.errorMessage;
        }
        if (!field.pattern.test(form[field.name])) {
          errors[field.name] = field.errorMessage;
        }
      } else {
        if (field.required && !form[field.name]) {
          errors[field.name] = field.errorMessage;
        }
      }
    });
    return errors;
  };

  const errors = validateForm({
    email,
    password,
  });
  if (Object.keys(errors).length != 0) {
    console.log(Object.keys(errors).length, "in action");
    return json({ errors }, { status: 400 });
  }



  const getJWT = async (formColl) => {
    const res = await api.getJWT(formColl)
    console.log(res, res.status)
    if (res.status == 200) {
      let token = res.data.access_token
      let username = res.data.username
      let email = res.data.email
      const actionData = { token, username, email }
      return json({ actionData }, { status: 200 });
    } else {
      if (res.message == "Network Error") {
        let userErr = "Server is not responding plz try again later"
        return json({ userErr }, { status: 444 })
      }
      // console.log(res)
      let userErr = res.response.data.msg
      return json({ userErr }, { status: res.response.status })
    }
  };

  return toast.promise(
    getJWT(formColl), {
    pending: "Logging in...",
    success: "Logged in successfully",
    error: "Logging failed.."
  }
  )
}
