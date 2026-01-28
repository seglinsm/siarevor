import { useState } from "react";
import { Wrench, Package, Clock, Award, Send, Loader2, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema
const serviceFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Vārds ir obligāts" })
    .max(100, { message: "Vārds nedrīkst pārsniegt 100 rakstzīmes" }),
  phone: z.string()
    .trim()
    .min(1, { message: "Telefona numurs ir obligāts" })
    .max(20, { message: "Telefona numurs nedrīkst pārsniegt 20 rakstzīmes" })
    .regex(/^[\d\s+\-()]+$/, { message: "Nepareizs telefona numura formāts" }),
  message: z.string()
    .trim()
    .min(1, { message: "Ziņojums ir obligāts" })
    .max(1000, { message: "Ziņojums nedrīkst pārsniegt 1000 rakstzīmes" }),
});

type ServiceFormData = z.infer<typeof serviceFormSchema>;

const features = [
  { icon: Wrench, title: "Garantijas remonti", desc: "Oficiāli STIHL, Husqvarna un Stiga garantijas darbi" },
  { icon: Package, title: "Oriģinālās detaļas", desc: "Izmantojam tikai oriģinālās rezerves daļas" },
  { icon: Clock, title: "Ātra apkalpošana", desc: "Lielāko daļu remontu veicam 1-3 darba dienās" },
  { icon: Award, title: "Sertificēti meistari", desc: "Pieredzējuši speciālisti ar ražotāju apmācībām" },
];

const mechanics = [
  { name: "Guntis Pirkstiņš", phone: "+37129750037" },
  { name: "Uldis Reķēns", phone: "+37129829699" },
];

export function ServiceSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ServiceFormData>({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ServiceFormData, string>>>({});

  const validateForm = (): boolean => {
    const result = serviceFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ServiceFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ServiceFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Lūdzu aizpildiet visus laukus pareizi");
      return;
    }
    
    setLoading(true);
    
    // TODO: Replace with actual Edge Function or backend API call when Cloud is connected
    // The form data should be sent to a server-side endpoint that:
    // 1. Validates and sanitizes input
    // 2. Sends email to the configured recipient
    // 3. Implements rate limiting
    // Currently simulating successful submission for demo purposes
    
    setTimeout(() => {
      setLoading(false);
      toast.success("Pieteikums nosūtīts!", { description: "Mēs ar Jums sazināsimies tuvākajā laikā." });
      setFormData({ name: "", phone: "", message: "" });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="serviss" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-text font-medium text-sm uppercase tracking-wider">Serviss & Remonts</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Profesionāls tehnikas serviss no ekspertiem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Mūsu darbnīcā veicam visu veidu meža un dārza tehnikas remontu.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-secondary/30 rounded-lg p-6 text-center">
              <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mechanics Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display text-xl font-semibold mb-6 text-center">Mūsu servisa mehāniķi</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {mechanics.map(({ name, phone }) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold truncate">{name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {phone}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-background rounded-lg p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold mb-4 text-center">Pieteikt remontu</h3>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <Input 
                placeholder="Jūsu vārds" 
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})} 
                maxLength={100}
                className={errors.name ? "border-destructive" : ""}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input 
                placeholder="Telefona numurs" 
                type="tel" 
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
                maxLength={20}
                className={errors.phone ? "border-destructive" : ""}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <Textarea 
                placeholder="Aprakstiet problēmu..." 
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})} 
                maxLength={1000}
                className={errors.message ? "border-destructive" : ""}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
              Nosūtīt pieteikumu
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-4">Diagnostika: no €15 • Bezmaksas, ja veicam remontu</p>
        </div>
      </div>
    </section>
  );
}