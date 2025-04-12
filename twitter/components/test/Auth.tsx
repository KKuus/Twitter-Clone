"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import useRegisterModal from "@/hooks/useRegisterModal";
import RegisterModal from "../modals/registerModal";
import LoginModal from "../modals/loginModal";

const Auth = () => {
    return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
            <Image
              src={"/images/twitter.jpg"}
              alt="X"
              width={400}
              height={400}
              className="justify-self-center hidden md:block"
            />
        <div>
          <div className="block md:hidden">
            <Image src={"/images/x.svg"} alt="X" width={50} height={50} />
          </div>
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-full md:w-[60%]">
            <h2 className="font-bold text-3xl mb-4">Join today.</h2>
            <div className="flex flex-col space-y-2">
              <Button onClick={() => signIn("google")}>
                <div className="flex gap-2 items-center justify-center">
                  Sign up with Google
                </div>
              </Button>

              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2" />
                <p className="mx-4">or</p>
                <div className="h-px bg-gray-700 w-1/2" />
              </div>
              <Button>Create account</Button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default Auth;