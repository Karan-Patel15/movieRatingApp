import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Button } from "@/components/ui/button";
import { register } from "../AuthHelper";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";

interface response {
  auth: boolean;
  user: string;
  token: string;
}
export default function RegisterForm() {
  const [error, setError] = useState<string>("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logInSchema = z.object({
    username: z.string({ message: "Please enter a valid username" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  });

  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof logInSchema>) {
    register(values.username, values.password);
    navigate("/");
    setAuth(true);
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mb-10">Create a New Account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Username"
                    className={error ? "border-pink-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="password"
                    className={error ? "border-pink-500" : ""}
                  />
                </FormControl>
                <FormDescription>
                  Enter a password with 6 or more characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormMessage>{error}</FormMessage>

          <Button className="mt-6" type="submit">
            Register
          </Button>

          <Link to="/login">
            <Button className="mt-6 ml-2" type="button">
              Log In
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}
