import React from "react";
import FormInput from "components/FormInput";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { RegisterSchema } from "validation";
import Button from "components/Button";
import Separator from "components/Separator";
export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await login(values.userName, values.password);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className=" bg-white border px-[40px] pt-10 pb-6 ">
        <a href="#" className="flex justify-center mb-4">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </a>
        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
            Sign up to see photos and videos from your friends.
        </p>
        <Button>
        <AiFillFacebook size={20} />
                Log in with Facebook
        </Button>
        <Separator />
        <Formik
          initialValues={{
            email: "",
            full_name: "",
            username:"",
            password:""
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({ isSubmitting, values, isValid, dirty }) => (
            <Form className="grid gap-y-1.5">
              <FormInput
                name="email"
                label="email"
              />
              <FormInput
                name="full_name"
                label="Full Name"
              />
              <FormInput
                name="username"
                label="Username"
              />
              <FormInput type="password" name="password" label="Password" />
              <p className="text-xs text-[#8e8e8e] py-2">
              Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a yüklemiş olabilir. <a href="#">Daha Fazla Bilgi Al</a>
              <br></br>
              Kaydolarak, Koşullarımızı, Gizlilik İlkemizi ve Çerezler İlkemizi kabul etmiş olursun.
              </p>
              <Button
                disabled={!isValid || !dirty || isSubmitting}
                type="submit"
              >
                Sign up
              </Button>
              
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
        <a href="#" className="font-semibold text-brand">
          Sign up
        </a>
      </div>
    </div>
  );
}
