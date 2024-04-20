"use client";

import { SocialButton } from "@/components/common/SocialButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Page = () => {
  return (
    <main className="bg-neutral-950 w-full flex-col text-white min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Login To Archat</h1>

      <form className="max-w-md space-y-4 w-full">
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input
            type="email"
            id="email"
            className="bg-black focus:border-slate-700 border-slate-700"
            placeholder="hello@example.com"
          />
        </div>

        <div>
          <Label htmlFor="password">Password*</Label>
          <Input
            type="password"
            id="password"
            className="bg-black focus:border-slate-700 border-slate-700"
          />
        </div>

        <Link href={"/auth/forget-password"}>
          <p className="mt-4 hover:underline ">Forget Password?</p>
        </Link>

        <Button className="w-full bg-[#A3E635] hover:bg-[#65A30D] ">
          Log In
        </Button>
        <div className="w-full flex flex-col items-center">
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
        </div>
      </form>
    </main>
  );
};

export default Page;
