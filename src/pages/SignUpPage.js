import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({});
  return (
    <div>
      <LayoutAuthentication heading="Sign Up">
        <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
          Already a member?{" "}
          <Link to="/sign-in" className="font-semibold underline text-primary">
            Sign in
          </Link>
        </p>
        <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border-2 text-text2 gap-x-3 border-strock rounded-xl">
          <img srcSet="/icon-google.png 2x" alt="icon-google" />
          <span>Sign up with Google</span>
        </button>
        <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
          Or sign up with email
        </p>
        <form action="">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="fullname">Full Name *</Label>
            <Input control={control} name="fullname"></Input>
          </div>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
