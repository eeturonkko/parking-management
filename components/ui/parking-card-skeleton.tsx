import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Car } from "lucide-react"

export default function ParkingCardSkeleton() {
  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-7 w-36" />
          <Car className="h-5 w-5 text-muted-foreground opacity-50" />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <Skeleton className="h-4 w-24" />
            <div className="bg-yellow-50/30 border-2 border-yellow-200 rounded-md px-4 py-2 flex justify-center">
              <Skeleton className="h-8 w-32" />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <Skeleton className="h-4 w-28" />
            <div className="flex items-center space-x-2">
              <Skeleton className="h-7 w-16" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <div className="w-full flex justify-between items-center">
          <Skeleton className="h-4 w-24" />
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-gray-300 mr-2" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

