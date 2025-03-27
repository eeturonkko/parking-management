import { Clock, Check, AlertCircle, Car, CreditCard } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PricingTier {
  duration: string;
  price: string;
  isHighlighted?: boolean;
  description?: string;
}

interface ParkingPricingProps {
  hourlyRates?: PricingTier[];
  dailyRates?: PricingTier[];
  currency?: string;
}

export default function ParkingPricing({
  hourlyRates = [
    {
      duration: "0-4 hours",
      price: "0.00",
      isHighlighted: true,
      description: "First 4 hours completely free",
    },
    { duration: "4-8 hours", price: "5.00" },
    { duration: "8-12 hours", price: "8.00" },
    { duration: "12-24 hours", price: "12.00" },
  ],
  dailyRates = [
    { duration: "1 day", price: "12.00" },
    { duration: "2 days", price: "22.00" },
    { duration: "3 days", price: "30.00" },
    { duration: "Weekly", price: "60.00", description: "7 consecutive days" },
  ],
  currency = "$",
}: ParkingPricingProps) {
  return (
    <Card className=" max-w-3xl mx-auto shadow-md w-[600px] mt-8">
      <CardHeader className="text-center border-b pb-6">
        <div className="mx-auto bg-primary/10 w-fit p-3 rounded-full mb-3">
          <CreditCard className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl">Parking Rates</CardTitle>
        <CardDescription className="text-base">
          Convenient and affordable parking options
        </CardDescription>
      </CardHeader>

      <Tabs defaultValue="hourly" className="w-full">
        <div className="px-6 pt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hourly">
              <Clock className="mr-2 h-4 w-4" />
              Hourly Rates
            </TabsTrigger>
            <TabsTrigger value="daily">
              <Car className="mr-2 h-4 w-4" />
              Daily Rates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="hourly" className="pt-4">
          <CardContent>
            <div className="space-y-4">
              {hourlyRates.map((rate, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    rate.isHighlighted
                      ? "bg-green-50 border border-green-200"
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {rate.isHighlighted ? (
                      <div className="bg-green-100 p-2 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="bg-slate-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-slate-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium">{rate.duration}</h3>
                      {rate.description && (
                        <p className="text-sm text-muted-foreground">
                          {rate.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {rate.isHighlighted && rate.price === "0.00" ? (
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 border-green-200"
                      >
                        FREE
                      </Badge>
                    ) : (
                      <span className="text-lg font-semibold">
                        {currency}
                        {rate.price}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="daily" className="pt-4">
          <CardContent>
            <div className="space-y-4">
              {dailyRates.map((rate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-100 p-2 rounded-full">
                      <Car className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{rate.duration}</h3>
                      {rate.description && (
                        <p className="text-sm text-muted-foreground">
                          {rate.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-lg font-semibold">
                    {currency}
                    {rate.price}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="border-t p-6 bg-slate-50">
        <div className="flex items-start gap-2 w-full">
          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Rates are subject to change. Special event pricing may apply. Please
            check signage at the parking facility for the most current rates.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
