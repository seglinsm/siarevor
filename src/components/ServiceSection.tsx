import { useState } from "react";
import { Wrench, Package, Clock, Award, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const features = [
  { icon: Wrench, title: "Garantijas remonti", desc: "Oficiāli STIHL, Husqvarna un Stiga garantijas darbi" },
  { icon: Package, title: "Oriģinālās detaļas", desc: "Izmantojam tikai oriģinālās rezerves daļas" },
  { icon: Clock, title: "Ātra apkalpošana", desc: "Lielāko daļu remontu veicam 1-3 darba dienās" },
  { icon: Award, title: "Sertificēti meistari", desc: "Pieredzējuši speciālisti ar ražotāju apmācībām" },
];

export function ServiceSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Pieteikums nosūtīts!", { description: "Mēs ar Jums sazināsimies tuvākajā laikā." });
      setFormData({ name: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <section id="serviss" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Serviss & Remonts</span>
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

        <div className="max-w-xl mx-auto bg-background rounded-lg p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold mb-4 text-center">Pieteikt remontu</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Jūsu vārds" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            <Input placeholder="Telefona numurs" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
            <Textarea placeholder="Aprakstiet problēmu..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
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