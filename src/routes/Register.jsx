import {useContext} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserProvider";
import {errorsFirebase} from "../utils/errorsFirebase";
import {formValidate} from "../utils/formValidate";

import FormAlert from "../components/FormAlert";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  const navegate = useNavigate();
  const {registerUser} = useContext(UserContext);
  const {required, patternEmail, minLength, validateTrim, validateEquals} =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
    setError,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async ({email, password}) => {
    try {
      await registerUser(email, password);
      navegate("/");
    } catch (error) {
      const {code, message} = errorsFirebase(error);
      setError(code, {message});
    }
  };

  return (
    <>
      <Title text={"Register"} />
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
          label="Ingresa password"
          error={errors.password}>
          <FormAlert error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Repita password"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          label="Repite contraseña"
          error={errors.repassword}>
          <FormAlert error={errors.repassword} />
        </FormInput>
        <Button text={"Register"} type="submit" />
      </form>
    </>
  );
};

export default Register;
