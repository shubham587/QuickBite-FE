import { Button } from "@/components/ui/button";
import UserForm from "@/components/UserForm";
import React, { useState } from "react";
import logo from "../../images/logo.webp";
import { json, redirect, useActionData, useNavigate } from "react-router-dom";
import api from "@/service/api";
import { toast } from "react-toastify";


const SignUpAuth = () => {
  const [formData, setFormData] = useState({});
  const [userError, setUserError] = useState(null)
  const [location, setLocation] = useState("Select location")

  const navigate = useNavigate();
  const actionValue = useActionData();

  const errors = actionValue?.errors || {};
  let userErr = actionValue?.userErr || null

  // if(userErr !== null){
  //   setUserError(userErr)
  // }

  console.log(actionValue, "actionValue")
  console.log(userErr, "userErr")

  const submitHandler = (formData) => {
    console.log("formData", formData);
    setFormData(formData);
  };

  const signinFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
      errorMessage: "Name is required",
    },
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
    {
      name: "confirm-password",
      placeholder: "Confirm password",
      label: "Password",
      type: "password",
      required: true,
      // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage: "Password did not match!!",
    },
  ];

  return (
    <>
      <div
        style={{ height: "90vh" }}
        className="signin-container grid place-items-center bg-gray-900 "
      >
        <div className="signin-section border-black border-4 flex justify-evenly align-middle items-center bg-white  h-4/5 w-4/5 rounded-lg">
          <div className="signin w-1/3 ">
            <UserForm
              userErr={userErr}
              errors={errors}
              className=""
              fields={signinFields}
              formTitle={"User Registration"}
              onSubmit={submitHandler}
              btnTitle="Signin"
              checkItem = {location}
              location={true}
              locationHandler={(val) => {setLocation(val); console.log(location)}}
            >
              <Button
                onClick={() => navigate("/auth/login")}
                className=" text-white bg-gray-700 rounded-xl"
                type="button"
              >
                Already User
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

export default SignUpAuth;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPass = formData.get("confirm-password");

  const formColl = {
    "username": name,
    "email": email,
    "password": password,
  };

  const signinFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
      errorMessage: "Name is required",
    },
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
    {
      name: "confirm-password",
      placeholder: "Confirm password",
      label: "Password",
      type: "password",
      required: true,
      // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage: "Password did not match!!",
    },
  ];

  const validateForm = (form) => {
    const errors = {};
    signinFields.forEach((field, ind) => {
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
      if (field.name == "confirm-password" && password !== confirmPass) {
        errors[field.name] = field.errorMessage;
      }
    });
    return errors;
  };

  const errors = validateForm({
    email,
    password,
    name,
    "confirm-password": confirmPass,
  });
  if (Object.keys(errors).length != 0) {
    console.log(Object.keys(errors).length, "in action");
    const userErr = null
    return json({ errors, userErr }, { status: 400 });
  }

  const userRegister = async (formColl) => {
    const res = await api.postUser(formColl)
    console.log(res)
    if (res.status == 201) {
      let data = await res.data.msg
      console.log(data, "login")
      toast.success("Signed up successfully.")
      return redirect("/auth/login");
    } else {
      if(res.message == "Network Error"){
        let userErr = "Server is not responding plz try again later"
        return json({userErr}, {status: 444})
      }
      console.log(res)
      toast.error("signing failed...")
      const userErr = res.response.data.msg;
      return json({ userErr }, { status: 400 });
    }
  };

  // return userRegister(formColl)

  return toast.promise(
    userRegister(formColl), {
    pending: "Signing in...",
  }
  )
};
