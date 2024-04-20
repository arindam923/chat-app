"use client";

import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SocialButton } from "@/components/common/SocialButton";

const Page = () => {
  const [isFormVisible, setFormVisible] = useState(true);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <main className="bg-zinc-950 flex items-center w-full min-h-screen">
      <div className="w-1/2 p-12 flex flex-col items-center">
        <h2 className="text-4xl w-[80%] text-white font-bold leading-normal">
          Enjoy Seamless Messaging Service with Archat
        </h2>
        <p className="text-xs  w-[80%] leading-5 text-gray-500">
          Introuducing ArChat he ultimate messaging app for your personal and
          professional circles. With ArChat, you can connect with friends,
          family, and coworkers securely and seamlessly.
        </p>
        <SocialButton
          imagePath="/google.png"
          title="Sign In With Google"
          onClick={() => console.log("sign in with google")}
        />
        <SocialButton
          imagePath="/apple.png"
          title="Sign In With Apple"
          onClick={() => console.log("sign in with apple")}
        />
        <div className="flex w-[80%] items-center space-x-2 text-xs text-slate-400">
          <div className="w-full h-[1px] bg-gray-600" />
          <span>OR</span>
          <div className="w-full h-[1px] bg-gray-600" />
        </div>
        {isFormVisible ? (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            //animate={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="w-[80%] text-white space-y-2"
          >
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              className="bg-black border-slate-700 focus:border-slate-700"
              placeholder="hello@test.com"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center flex-col"
          >
            <div className="w-[80%] text-white space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                className="bg-black border-slate-700 focus:border-slate-700"
                placeholder="Password"
              />
            </div>
            <div className="w-[80%] text-white space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                className="bg-black border-slate-700 focus:border-slate-700"
                placeholder="Your Name"
              />
            </div>
          </motion.div>
        )}{" "}
        <Button onClick={toggleForm} className="w-[80%] bg-black mt-2">
          Get Started for free
        </Button>
        <Link
          href="/auth/login"
          className="flex hover:underline  items-center space-x-2 mt-5 w-[80%] text-xs text-white"
        >
          <p>
            Already have an account ?{" "}
            <span className="font-bold text-[#A3E635]">Login</span>
          </p>
        </Link>
      </div>
      <div className="w-1/2 bordr-l border-slate-600 h-screen"></div>
    </main>
  );
};

export default Page;
