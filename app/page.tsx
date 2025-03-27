import Link from "next/link";
import { Button } from "@/components/ui/button";
import FindVehicle from "@/components/ui/find-vehicle";
import LicensePlateRegistration from "@/components/ui/license-plate-reg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen mt-48 max-w-xl">
      <h1 className="font-bold text-4xl text-center">Welcome to JustPark!</h1>
      <Tabs
        defaultValue="register"
        className=" container mx-auto flex items-center mt-4 "
      >
        <TabsList>
          <TabsTrigger value="register">Register your vehicle</TabsTrigger>
          <TabsTrigger value="find">Find your vehicle</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="container mx-auto w-full">
          <LicensePlateRegistration />
        </TabsContent>
        <TabsContent value="find">
          <FindVehicle />
        </TabsContent>
      </Tabs>
      <Button className="mt-4 ">
        <Link href="/parked-vehicles">View parked vehicles</Link>
      </Button>
    </main>
  );
}
