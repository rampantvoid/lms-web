import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { SignUpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";

const RegisterForm = () => {
  // Define the Form
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isEducator: false,
    },
  });

  // Form submit handler
  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg w-full md:w-1/2 lg:w-[450px] font-inter">
      <img src="/assets/logo.svg" alt="" width={"50px"} />
      <p className=" uppercase font-bold font-inter text-xl my-5">register</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className={`transition-shadow ease-in-out focus:shadow-md !ring-0 !ring-offset-0 ${
                      form.formState.errors.username?.message
                        ? "!border-red-600"
                        : ""
                    }`}
                    type="text"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.username && (
                  <span className="md:text-sm text-xs text-[#EF4444]">
                    {form.formState.errors.username?.message}
                  </span>
                )}
              </FormItem>
            )}
          />
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
                    type="email"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    className={`transition-shadow ease-in-out focus:shadow-md !ring-0 !ring-offset-0 ${
                      form.formState.errors.confirmPassword?.message
                        ? "!border-red-600"
                        : ""
                    }`}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.confirmPassword && (
                  <span className="md:text-sm text-xs text-[#EF4444]">
                    {form.formState.errors.confirmPassword?.message}
                  </span>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isEducator"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel>Are you an Educator?</FormLabel>
                <FormControl>
                  <Switch
                    className="!mt-0 mx-2"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

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
        Already have an account?{" "}
        <Link to="/login" className=" text-[#3772ff] underline">
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
