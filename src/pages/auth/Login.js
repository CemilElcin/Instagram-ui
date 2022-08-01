import React from "react";
import FormInput from "components/FormInput";
import { useEffect, useRef, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "validation";
import Button from "components/Button";
import Separator from "components/Separator";
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");

      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  ];

  const handleSubmit = async (values, actions) => {
    const response = await login(values.userName, values.password);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto  items-center gap-x-8 justify-center">
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          {images.map((image, key) => (
            <img
              key={key}
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
              src={image}
            />
          ))}
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border px-[40px] pt-10 pb-6 ">
          <a href="#" className="flex justify-center mb-8">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </a>
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({ isSubmitting, values, isValid, dirty }) => (
              <Form className="grid gap-y-1.5">
                <FormInput
                  name="userName"
                  label="Phone number, username or email"
                />
                <FormInput type="password" name="password" label="Password" />

                <Button
                  disabled={!isValid || !dirty || isSubmitting}
                  type="submit"
                >
                  Log In
                </Button>
                <Separator/>
                <a
                  href="#"
                  className="flex mb-2.5 justify-center items-center gap-x-2 text-xs font-semibold text-facebook"
                >
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </a>
                <a
                  href="#"
                  className="text-sm flex items-center justify-center text-link"
                >
                  Forgot Password?
                </a>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Don`t have an account?
          <Link to="/auth/register" className="font-semibold text-brand">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
