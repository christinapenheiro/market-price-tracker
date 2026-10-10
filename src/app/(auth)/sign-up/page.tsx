"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useState } from "react";
import { SyntheticEvent } from "react";

export default function SignUp() {
  const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Successfully Created Account.");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const [password, setPassword] = useState("");

  const handleGoogleSignup = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignup = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <h3 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h3>
        <span className="text-sm">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </span>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Form
          className="flex sm:w-96 flex-col gap-4 bg-white rounded-md m-4 p-5"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>নাম</Label>
            <Input placeholder="যেমন: রহিম উদ্দিন" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>ইমেইল</Label>
            <Input placeholder="you@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>পাসওয়ার্ড</Label>
            <Input placeholder="কমপক্ষে ৮ অক্ষর" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="confirmPassword"
            type="password"
            validate={(value) => {
              if (value !== password) {
                return "Password do not match";
              }

              return null;
            }}
          >
            <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input placeholder="আবার লিখুন" />
            <FieldError />
          </TextField>

          <div className="flex gap-2 items-center justify-center text-center">
            <Button
              type="submit"
              className="rounded w-full bg-green-700 text-center"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>
          </div>
          <div className="flex w-full flex-col">
            <div className="divider text-sm font-semibold">অথবা</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-none lg:flex gap-1 items-center text-center justify-between">
            <button
              className="btn px-1.5 flex items-center justify-center text-center"
              onClick={handleGoogleSignup}
            >
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>
            <button
              className="btn px-1.5 flex items-center justify-center text-center"
              onClick={handleGithubSignup}
            >
              <FaGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>
          <Link className="text-md text-center" href="/sign-in">
            অ্যাকাউন্ট আছে?{" "}
            <span className="text-green-600">
              সাইন ইন করুন
            </span>
          </Link>
        </Form>
        <Link href="/">← হোম পেজে ফিরে যান</Link>
      </div>
    </div>
  );
}
