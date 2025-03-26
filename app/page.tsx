import LicensePlateRegistration from "@/components/ui/license-plate-reg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen mt-48 max-w-xl">
      <h1 className="font-bold text-4xl text-center">Welcome to JustPark!</h1>
      <p className="font-semibold text-lg text-center my-3">
        Register your license plate below
      </p>
      <LicensePlateRegistration />
      <Button className="mt-4 ">
        <Link href="/parked-vehicles">View parked vehicles</Link>
      </Button>
    </main>
  );
}
