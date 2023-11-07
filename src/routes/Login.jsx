import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";
import { errorsFirebase } from "../utils/errorsFirebase";

import FormAlert from "../components/FormAlert";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Login = () => {
  const navegate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navegate("/");
    } catch (error) {
      const { code, message } = errorsFirebase(error);
      setError(code, { message });
    }
  };

  return (
    <>
       <Title text={"Login"}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingresa un email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label ="Ingresa tu correo"
          error={errors.email}
        >
          <FormAlert error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresa un password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          label ="Ingresa tu contraseña"
          error={errors.password}
        >
          <FormAlert error={errors.password} />
        </FormInput>
       <Button text={"Login"} type="submit"/>
      </form>
    </>
  );
};

export default Login;
