"use client";

import { Loader2, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/lib/ui/alert";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";

export default function SignIn() {
  const searchParams = useSearchParams();
  const hasErrorParam = Boolean(searchParams.get("error"));

  const [isLoading, setIsLoading] = useState(false);
  const [signInError, setSignInError] = useState(hasErrorParam);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setSignInError(false);

    const formData = e.target as HTMLFormElement;
    const name = (formData.elements[0] as HTMLInputElement).value;
    const password = (formData.elements[1] as HTMLInputElement).value;

    await signIn("credentials", { name, password, callbackUrl: window.location.origin });
  }

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center w-350">
        <h1 className="text-2xl font-semibold tracking-tight">Hello!</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Enter your name and password below to enter
        </p>
        {signInError && (
          <Alert variant="destructive" className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Authentication Failed!</AlertTitle>
            <AlertDescription>Please check your credentials and try again.</AlertDescription>
          </Alert>
        )}
        <form onSubmit={onSubmit} className="w-full mt-6">
          <Input
            id="name"
            placeholder="Name"
            type="text"
            autoComplete="name"
            disabled={isLoading}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            className="mt-2"
            autoComplete="current-password"
            disabled={isLoading}
          />
          <Button disabled={isLoading} className="mt-2 w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </form>
      </div>
    </main>
  );
}
