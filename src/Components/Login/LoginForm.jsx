import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user.js";
import { useState } from "react";

const usernameConfig = {
  required: true,
  minLength: 3,
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null)

  const onSubmit = async ({ username }) => {
    setLoading(true)
    const [error, user] = await loginUser(username);
    if(error !== null) {
      setApiError(error)
    }

    setLoading(false)

  };
  console.log(errors);

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is empty</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>Username has to be atleast 3 characters</span>;
    }
  })();

  return (
    <>
      <h2>What's your name?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="johndoe"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button type="submit" disabled={loading}>Continue</button>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{ apiError } </p>}
      </form>
    </>
  );
}
export default LoginForm;
