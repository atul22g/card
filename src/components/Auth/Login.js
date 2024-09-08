import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { togglePassword } from "../../data/slices/togglePassord";
import { useForm } from 'react-hook-form'
import { handleErrors } from "../func/AllFunc";
import { NavLink } from "react-router-dom";
import { authService } from "../../appwrite/auth";
import { login } from "../../data/slices/authSlice"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logindata, setLogindata] = useState({});
  const [isSubmit, setisSubmit] = useState(false)
  const icon = useSelector(state => state.togglePassord.icon);
  const type = useSelector(state => state.togglePassord.type);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const updateform = (name, value) => setLogindata({ ...logindata, [name]: value })

  useEffect(() => {
    const handleGetUser = async () => {
      const userData = await authService.getCurrentUser();
      if(userData){
        window.location.href = '/dashboard'
      }
    }
    handleGetUser()
  }, [authService])


  const loginFunc = async (data) => {
    try {
      setisSubmit(true)
      const userData = await authService.login(data)

      if (userData.status) {
        dispatch(login(userData))
        navigate('/dashboard')
      }
      setisSubmit(false)
    } catch (error) {
      setisSubmit(false)
      handleErrors({ message: error.message })
    }
  }
  return (
    <section className="bg-gray-1 py-10 bottom-1 min-h-screen themeLgbg flex justify-center items-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <form onSubmit={handleSubmit(loginFunc)}>
                <input
                  type='text'
                  placeholder="Email"
                  {...register("email", {
                    required: { value: true, message: "Email is Required" },
                    validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                  })}
                  onChange={(e) => updateform(e.target.name, e.target.value)}
                  className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white themeOutLine outline-1 mb-6"
                />
                <div className="flex relative">
                  <input
                    type={type}
                    placeholder="Password"
                    {...register("password", {
                      required: { value: true, message: "Password is Required" },
                      minLength: { value: 8, message: 'Password must be 8 letters' },
                    })}
                    onChange={(e) => updateform(e.target.name, e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white themeOutLine outline-1 mb-6"
                  />
                  <span className="flex justify-around items-center" onClick={() => dispatch(togglePassword('togger'))}>
                    <i className={`absolute right-3 top-4 cursor-pointer fa-duotone ${icon}`}></i>
                  </span>
                </div>
                <div className="mb-20 relative">
                  {isSubmit && <img src="./icons/loader.svg" alt="loader" width={50} height={50} className="absolute top-0 left-6 z-30" />}
                  <input
                    disabled={isSubmit}
                    type="submit"
                    onClick={() => handleErrors(errors)}
                    value="Log in"
                    className="w-full absolute top-0 left-0 loader_btn cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90 themeBg"
                  />
                </div>
              </form>
              <p className="mb-2 text-base text-secondary-color dark:text-dark-7">
                Connect With
              </p>
              <ul className="-mx-2 mb-6 flex justify-between">
                <li onClick={() => authService.createAccountAuth('github')} className="w-full cursor-pointer px-2 flex h-11 items-center justify-center text-white bg-[#35373a] hover:bg-opacity-90 mr-2 rounded-full">
                  <i className="fa-xl text-white fa-brands fa-github mr-2"></i>
                  <span className="text-sm">Continue with Github</span>
                </li>
                <li onClick={() => authService.createAccountAuth('google')} className="w-full cursor-pointer px-2 flex h-11 items-center justify-center rounded-md hover:bg-opacity-90">
                  <img className="w-full" src="./icons/continue_google.svg" alt="google" />
                </li>
              </ul>
              <a
                href="/"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                Forget Password?
              </a>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Not a member yet? </span>
                <NavLink to={'/signup'} className="hover:text-primary hover:underline">
                  Sign Up
                </NavLink>
              </p>

              <div>
                <span className="absolute right-1 top-1">
                  <img src="./icons/form-top.svg" alt="form-top" />
                </span>
                <span className="absolute bottom-1 left-1">
                  <img src="./icons/form-bottom.svg" alt="form-bottom" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login