import LicensePlateRegistration from "@/components/ui/license-plate-reg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-12 max-w-3xl">
      <h1 className="font-bold text-5xl text-center">
        Welcome to the Parking Lot
      </h1>
      <p className="font-semibold text-xl text-center my-3">
        Register your license plate below to park your vehicle
      </p>
      <LicensePlateRegistration />
      <Button className="mt-4 ">
        <Link target="_blank" href="/parked-vehicles">
          View parked vehicles
        </Link>
      </Button>
    </main>
  );
}
