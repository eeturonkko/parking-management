import { ParkingCircle } from "lucide-react";

export default function NoParkedVehicles() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center  rounded-lg  drop-shadow-2xl ">
      <div className="relative mb-4">
        <div className="absolute -inset-1 rounded-full bg-primary/10 " />
        <div className="relative bg-slate-100 rounded-full p-4">
          <ParkingCircle className="h-12 w-12 text-primary animate-pulse" />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">No Vehicles Parked</h3>
      <p className="text-muted-foreground max-w-md mb-6">
        There are currently no vehicles parked in the system. When vehicles are
        parked, they will appear here.
      </p>
    </div>
  );
}
