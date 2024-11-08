import classNames from "classnames";
import React, { Children, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Dropdown from "../Dropdown";
const UserForm = ({
  userErr,
  errors,
  classname,
  fields,
  children,
  btnTitle,
  onSubmit,
  formTitle,
  location,
  locationHandler,
  checkItem
}) => {
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [form, setForm] = useState(initialFormData);
  const [error, setError] = useState(errors);
  const [userError, setUserError] = useState(userErr);
  const [userErrKey, setUserErrKey] = useState(null);

  useEffect(() => {
    if (userErr) {
      setUserErrKey(1 + Math.random(1, 4)); // or use a unique identifier
    }
  }, [userErr]);

  useEffect(() => {
    setError(errors);
  }, [errors]);

  useEffect(() => {
    if (userErr != null) {
      setForm((prev) => {
        return { ...prev, email: "", password: "", "confirm-password": "" };
      });
      console.log("first");
    }
  }, [userErrKey]);

  const formClassName = classNames(
    "max-w-lg text-start gap-5  m-auto p-8 bg-orange-400 rounded-2xl shadow-md",
    classname
  );

  const validateForm = (form) => {
    // console.log(form)
    const errors = {};
    fields.forEach((field, ind) => {
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
      // if(field)
    });
    return errors;
  };
  // console.log(form)

  const formHandler = (e) => {
    e.preventDefault();
    console.log(form, e);
    const error = validateForm(form);
    if (Object.keys(errors).length === 0) {
      onSubmit(form);
      setError({});
    } else {
      setError(error);
    }
  };

  return (
    <>
      <Form method="post" className={formClassName}>
        {formTitle ? (
          <h1 className="text-2xl text-white font-semibold text-center">
            {formTitle}
          </h1>
        ) : null}
        {fields.map((field, ind) => (
          <div key={ind} className="form-inputs m-1">
            <label className="block text-white text-sm font-bold mb-2">
              {field.label}
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  ${
                error[field.name] ? "border-red-500" : ""
              }`}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={(e) => {
                setForm({ ...form, [field.name]: e.target.value });
              }}
            />

            {error[field.name] && (
              <span className="text-red-800 text-xs italic">
                {error[field.name]}
              </span>
            )}
          </div>
        ))}
        {/* {location && (
          <Dropdown
          className="text-black ml-6 w-[200px]"
            // triggerName="Select Location"
            items={[{ name: "Bangalore" }, { name: "Chennai" }]}
            onChangeFunction={locationHandler}
            checkItem={checkItem}
          />
        )} */}
        <div className="user-err">
          {userErr != null ? <h3 className=" text-red-500">{userErr}</h3> : ""}
        </div>
        <div className="btn my-4 flex flex-row justify-evenly">
          <button className="bg-black w-1/3 p-2 rounded-xl " type="submit">
            {btnTitle}
          </button>
          {children}
        </div>
      </Form>
    </>
  );
};

export default UserForm;
