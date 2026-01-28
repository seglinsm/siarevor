import { Bike, Clock, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const rentalBikes = [
  { name: "Honda CRF250R", type: "Motokross", price: "80€/dienā" },
  { name: "KTM 250 SX-F", type: "Motokross", price: "90€/dienā" },
  { name: "Yamaha YZ125", type: "Motokross", price: "60€/dienā" },
];

export function RentalSection() {
  return (
    <section id="noma" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-text font-medium text-sm uppercase tracking-wider">
            Motokrosa noma
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Iznomā motokrosa tehniku
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Piedāvājam kvalitatīvu motokrosa motociklu nomu treniņiem un sacensībām.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-4 bg-card rounded-lg p-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Elastīgi termiņi</h3>
              <p className="text-sm text-muted-foreground">Noma no 1 dienas līdz vairākām nedēļām</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card rounded-lg p-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Apdrošināšana iekļauta</h3>
              <p className="text-sm text-muted-foreground">Pilna apdrošināšana visām nomātām vienībām</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card rounded-lg p-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Bike className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Sagatavota tehnika</h3>
              <p className="text-sm text-muted-foreground">Visi motocikli pilnībā apkopti un gatavi braukšanai</p>
            </div>
          </div>
        </div>

        {/* Rental options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {rentalBikes.map((bike) => (
            <div 
              key={bike.name} 
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bike className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{bike.name}</h3>
                  <p className="text-sm text-muted-foreground">{bike.type}</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">{bike.price}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Interesē noma? Sazinieties ar mums, lai rezervētu!
          </p>
          <Button size="lg" asChild>
            <a href="tel:+37129101085">
              <Phone className="w-4 h-4 mr-2" />
              Zvanīt: +371 29101085
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
