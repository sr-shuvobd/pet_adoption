"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { email, password } = data;
    
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
    });

    console.log({res,error})

    if (res) {
      toast.success("Login successfully.");
      router.push("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto bg-[#FFF1EB] flex flex-col justify-center items-center h-screen">
      <div className=" flex  flex-col  bg-gray-100 p-5 rounded-2xl gap-4 text-center">
      <Form
        className="space-y-2"
        onSubmit={onSubmit}
      >
        <h1 className="text-3xl mb-5 font-bold text-[#D68B6E]">
          Login Your Account
        </h1>
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
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
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
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 6 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex flex-col gap-5 text-center">
          <Button
            variant="outline"
            type="submit"
            className=" btn px-5 py-2 flex items-center gap-2
                rounded
                border-2 border-[#D68B6E]
                text-[#D68B6E]
                font-semibold
                hover:bg-[#D68B6E]
                hover:text-white
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(214,139,110,0.4)]
                hover:scale-105"
          >
            <Check />
            Login
          </Button>
          
        </div>
      </Form>
      <button
            className="btn px-5 py-2 flex items-center gap-2
                rounded
                border-2 border-[#D68B6E]
                text-[#D68B6E]
                font-semibold
                hover:bg-[#D68B6E]
                hover:text-white
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(214,139,110,0.4)]
                hover:scale-105"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
      </button>
      <p className="">
            Don’t have an account yet?{" "}
            <Link href="/register" className="text-red-500">
              Sign Up now.
            </Link>
          </p>
          </div>
    </div>
  );
};

export default LoginPage;
