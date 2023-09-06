import React from "react";
import FormComponent from "../common/form/form";
import TextField from "../common/form/textField";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/app";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
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
  const navigate = useNavigate();
  const redirect = () => navigate("/topics");
  const handleSubmit = (data) => {
    dispatch(logIn(data, redirect));
  };
  return (
    <>
      <h1>Chat-Socket</h1>
      <FormComponent
        validatorConfig={validatorConfig}
        onSubmit={handleSubmit}
        defaultData={defaultData}
      >
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
