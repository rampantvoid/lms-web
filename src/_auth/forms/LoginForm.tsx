import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SignInSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // Define the Form
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submit handler
  function onSubmit(values: z.infer<typeof SignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg w-full md:w-1/2 lg:w-[450px] font-inter">
      <img src="/assets/logo.svg" alt="" width={"50px"} />
      <p className=" uppercase font-bold font-inter text-xl my-5">login</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className={`transition-shadow ease-in-out focus:shadow-md !ring-0 !ring-offset-0 ${
                      form.formState.errors.email?.message
                        ? "!border-red-600"
                        : ""
                    }`}
                    placeholder="test@email.com"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.email && (
                  <span className="md:text-sm text-xs text-[#EF4444]">
                    {form.formState.errors.email?.message}
                  </span>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className={`transition-shadow ease-in-out focus:shadow-md !ring-0 !ring-offset-0 ${
                      form.formState.errors.password?.message
                        ? "!border-red-600"
                        : ""
                    }`}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.password && (
                  <span className="md:text-sm text-xs text-[#EF4444]">
                    {form.formState.errors.password?.message}
                  </span>
                )}
              </FormItem>
            )}
          />
          <p className="!m-0 text-right">
            <Link to="" className="text-[#3772ff] text-sm italic underline">
              forgot password?
            </Link>
          </p>
          <Button type="submit" className="w-full ">
            Submit
          </Button>
        </form>
      </Form>
      <div className="flex items-center w-full my-4">
        <div className="h-[0.5px] bg-[#e0e2db] w-full " />
        <p className="mx-2">OR</p>
        <div className="h-[0.5px] bg-[#e0e2db] w-full" />
      </div>
      <p className="text-sm italic">
        Don't have an account?{" "}
        <Link to="/register" className=" text-[#3772ff] underline">
          {" "}
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
