"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  email: z.string().email(),
});

export default function WaitlistForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function resetState() {
    setError(null);
    setSuccess(false);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      resetState();
      const response = await fetch(`${process.env.API_URL}/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to join waitlist. Please try again later."
      );
    }
  }

  return (
    <Form {...form}>
      <form
        onInvalid={resetState}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-sm mx-auto min-w-auto sm:min-w-xl"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <div className="flex gap-sm">
                  <Input placeholder="you@example.com" {...field} />
                  <Button type="submit">Join Waitlist</Button>
                </div>
              </FormControl>
              <FormDescription>
                {error ? (
                  <span className="text-destructive">{error}</span>
                ) : success ? (
                  <span className="text-primary">
                    Thanks for joining the waitlist! We'll notify you when we
                    launch.
                  </span>
                ) : (
                  "We'll tell you when we launch. Free to join. Leave at any time. No spam."
                )}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
