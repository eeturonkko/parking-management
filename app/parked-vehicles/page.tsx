"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParkingCard from "@/components/ui/parking-card";

export default function ParkedVehicles() {
  const registeredVehicles = useQuery(api.registeredVehicles.get);
  return (
    <main className="container mx-auto min-h-screen py-12">
      <div className="flex  flex-col max-w-xl gap-2 mb-4">
        <h1 className="font-bold text-5xl">Parked Vehicles</h1>
        <Button className="w-min">
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registeredVehicles?.map(({ _id, plate, _creationTime }) => (
          <ParkingCard
            key={_id}
            licensePlate={plate}
            parkingStarted={new Date(_creationTime)}
          />
        ))}
      </div>
    </main>
  );
}
