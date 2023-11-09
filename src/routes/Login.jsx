import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserProvider";
import {formValidate} from "../utils/formValidate";
import {useForm} from "react-hook-form";
import {errorsFirebase} from "../utils/errorsFirebase";

import FormAlert from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";
import LoadingButton from "../components/LoadingButton";

const Login = () => {
  const navegate = useNavigate();
  const {loginUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {required, patternEmail, minLength, validateTrim} = formValidate();

  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async ({email, password}) => {
    try {
      setLoading(true);
      await loginUser(email, password);
      navegate("/");
    } catch (error) {
      const {code, message} = errorsFirebase(error);
      setError(code, {message});
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title text={"Login"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingresa un email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu correo"
          error={errors.email}>
          <FormAlert error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresa un password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          label="Ingresa tu contraseña"
          error={errors.password}>
          <FormAlert error={errors.password} />
        </FormInput>
        <Button text="Login" type="submit " loaing={loading} />
      </form>
    </>
  );
};

export default Login;
