"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Car, CheckCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const licensePlateSchema = z.object({
  licensePlate: z
    .string()
    .min(2, { message: "License plate must be at least 2 characters" })
    .max(7, { message: "License plate cannot exceed 7 characters" })
    .refine((value) => /^[A-Z0-9-]+$/i.test(value), {
      message: "License plate can only contain letters, numbers, and hyphens",
    }),
});

type FormValues = z.infer<typeof licensePlateSchema>;

export default function LicensePlateRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedPlate, setSubmittedPlate] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(licensePlateSchema),
    defaultValues: {
      licensePlate: "",
    },
  });

  const registerVehicle = useMutation(
    api.registeredVehicles.createRegisteredVehicle
  );

  function onSubmit(data: FormValues) {
    const formattedPlate = data.licensePlate.toUpperCase();
    registerVehicle({ plate: formattedPlate });
    setSubmittedPlate(formattedPlate);
    setIsSubmitted(true);
  }

  function resetForm() {
    setIsSubmitted(false);
    form.reset();
  }

  return (
    <>
      {!isSubmitted ? (
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>License Plate Registration</CardTitle>
                <CardDescription>
                  Enter your vehicles license plate number
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="licensePlate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Plate Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ABC-123"
                          {...field}
                          className="text-center uppercase tracking-wider font-medium text-lg"
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the license plate exactly as it appears on your
                        vehicle
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Register Vehicle
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-md bg-green-50">
          <CardHeader>
            <div className="flex justify-center mb-2">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-center">
              Registration Successful
            </CardTitle>
            <CardDescription className="text-center">
              Your license plate has been registered
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-md px-6 py-3 mx-auto text-center max-w-[200px]">
              <span className="text-2xl font-mono font-bold tracking-wider uppercase">
                {submittedPlate}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-4">
            <Button onClick={resetForm} variant="outline">
              Register Another Vehicle
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
