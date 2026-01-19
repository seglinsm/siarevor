import { Award, Users, Calendar, Wrench } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Gadi pieredzē" },
  { icon: Users, value: "2000+", label: "Apmierināti klienti" },
  { icon: Wrench, value: "5000+", label: "Veikti remontdarbi" },
  { icon: Award, value: "3", label: "Oficiālie sertifikāti" },
];

export function AboutSection() {
  return (
    <section id="par-mums" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Par mums
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
              Uzticams partneris meža un dārza tehnikā
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">SIA Revor</strong> ir Liepājas vadošais meža un dārza 
                tehnikas speciālists ar vairāk nekā 15 gadu pieredzi nozarē. Mēs esam oficiālais 
                STIHL dīleris un pilnvarotais Husqvarna un Stiga garantijas serviss.
              </p>
              <p>
                Mūsu pieredzējušie speciālisti nodrošina augstākās kvalitātes apkalpošanu — 
                sākot no konsultācijas par piemērotāko tehniku līdz profesionālam remontam un 
                regulārai apkopei.
              </p>
              <p>
                Mēs lepojamies ar ilgtermiņa attiecībām ar mūsu klientiem, piedāvājot godīgus 
                padomus un uzticamu servisu par konkurētspējīgām cenām.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div 
                key={label} 
                className="bg-secondary/30 rounded-lg p-6 text-center"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
