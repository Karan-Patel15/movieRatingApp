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
import { logIn } from "../AuthHelper";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

interface response {
  auth: boolean;
  user: string;
  token: string;
}
export default function LogInForm() {
  const [error, setError] = useState<string>("");
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const logInSchema = z.object({
    username: z.string({ message: "Please enter a valid username" }),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof logInSchema>) {
    await logIn(values.username, values.password);
    if (!localStorage.getItem("token")) {
      setError("Invalid Username or Password");
    } else {
      setAuth(true);
      navigate("/");
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mb-10">Sign In</h1>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormMessage>{error}</FormMessage>
          <Button className="mt-6" type="submit">
            Log In
          </Button>
          <Link to="/register">
            <Button className="mt-6 ml-2" type="button">
              Register
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}
