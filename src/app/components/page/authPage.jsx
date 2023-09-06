import React from "react";
import FormComponent from "../common/form/form";
import TextField from "../common/form/textField";

const AuthPage = () => {
  const defaultData = { login: "", password: "" };
  const validatorConfig = {
    login: {
      isRequired: {
        message: "Field 'Login' cannot be empty",
      },
    },
    password: {
      isRequired: {
        message: "Field 'Password' cannot be empty",
      },
    },
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>Chat-Socket</h1>
      <FormComponent validatorConfig={validatorConfig} onSubmit={handleSubmit} defaultData={defaultData}>
        <TextField name="login" label="Login" />
        <TextField name="password" type="password" label="Password" />
        <button className="form-control" type="submit">
          ENTRY
        </button>
      </FormComponent>
    </>
  );
};

export default AuthPage;
