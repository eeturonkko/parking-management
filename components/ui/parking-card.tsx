"use client";

import { formatDistanceToNow } from "date-fns";
import { Car } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { Badge } from "@/components/ui/badge";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";

interface ParkingCardProps {
  id: Id<"registeredVehicles">;
  licensePlate: string;
  parkingStarted: Date;
}

export default function ParkingCard({
  id,
  licensePlate = "ABC-123",
  parkingStarted = new Date(Date.now() - 3600000),
}: ParkingCardProps) {
  const parkingDuration = formatDistanceToNow(parkingStarted, {
    addSuffix: false,
  });
  const formattedStartTime = parkingStarted.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const removeVehicle = useMutation(
    api.registeredVehicles.removeRegisteredVehicle
  );

  function handleEndParking(id: Id<"registeredVehicles">) {
    console.log(`Ending parking for vehicle with id: ${id}`);
    removeVehicle({ id });
    toast(`Parking ended successfully `);
  }

  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Parked Vehicle</CardTitle>
          <Car className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="text-sm text-muted-foreground">License Plate</span>
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-md px-4 py-2 inline-block text-center">
              <span className="text-2xl font-mono font-bold tracking-wider">
                {licensePlate}
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-sm text-muted-foreground">
              Parking Started
            </span>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 ">
                <span className="text-lg font-medium">
                  {formattedStartTime}
                </span>
                <Badge variant="outline" className="bg-primary/10">
                  {parkingDuration} ago
                </Badge>
              </div>
              <Button
                onClick={() => handleEndParking(id)}
                variant="destructive"
                className="w-min hover:bg-red-700 transition-colors"
              >
                End parking
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Parking Active</span>
          <div className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">Active</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
