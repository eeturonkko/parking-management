"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FindVehicle from "@/components/ui/find-vehicle";
import LicensePlateRegistration from "@/components/ui/license-plate-reg";
import ParkingPricing from "@/components/ui/parking-pricing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <main className="container mx-auto min-h-screen mt-12 max-w-xl">
      <h1 className="font-bold text-4xl text-center">Welcome to JustPark!</h1>

      <Tabs
        defaultValue="register"
        value={activeTab}
        onValueChange={setActiveTab}
        className="container mx-auto flex items-center mt-4"
      >
        <TabsList>
          <TabsTrigger value="register">Register your vehicle</TabsTrigger>
          <TabsTrigger value="find">Find your vehicle</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === "register" && (
            <TabsContent value="register" className="container mx-auto w-full">
              <motion.div
                key="register"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LicensePlateRegistration />
              </motion.div>
            </TabsContent>
          )}
          {activeTab === "find" && (
            <TabsContent value="find" className="container mx-auto w-full">
              <motion.div
                key="find"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <FindVehicle />
              </motion.div>
            </TabsContent>
          )}
        </AnimatePresence>
      </Tabs>

      <ParkingPricing />
      <Button className="mt-4">
        <Link href="/parked-vehicles">View parked vehicles</Link>
      </Button>
    </main>
  );
}
