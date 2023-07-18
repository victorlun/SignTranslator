import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user.js";
import { useState, useEffect } from "react";
import { storageSave } from "../../utils/storage.js";
import {useNavigate} from 'react-router-dom'
import {useUser} from "../../Context/UserContext.jsx";
import { STORAGE_KEY_USER } from "../../const/storageKeys.js";


const usernameConfig = {
  required: true,
  minLength: 3,
};

function LoginForm() {
  //Hooks
  const {  register,handleSubmit, formState: { errors }, } = useForm();
  const {user, setUser} = useUser()
  const navigate = useNavigate()
  
  //Local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);



  useEffect(() => {
    console.log("User has changed!", user)
    if(user !== null){
      navigate('/profile')
    }
  }, [user, navigate])




  const onSubmit = async ({ username }) => {
    setLoading(true);
    try {
      const [error, userResponse] = await loginUser(username);
      if (error !== null) {
        setApiError(error);
      }
      if (userResponse !== null) {
        storageSave(STORAGE_KEY_USER, userResponse);
        setUser(userResponse)
      }
    } catch (error) {
        setApiError("An error occurred during login.")
    } finally {
      setLoading(false);
    }
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
      <h3 style={{marginLeft: '25%'}}>What's your name?</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Johndoe"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button type="submit" disabled={loading} style={{marginLeft: "25%", marginTop: "5px"}}>
          Continue
        </button>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError} </p>}
      </form>
    </>
  );
}
export default LoginForm;
