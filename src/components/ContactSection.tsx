import { Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontakti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Kontakti</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Nāc ciemos vai zvani mums</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <a href="tel:+37129101085" className="flex items-center gap-4 bg-card rounded-lg p-4 hover:bg-secondary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
              <div><p className="font-semibold">+371 29101085</p><p className="text-sm text-muted-foreground">Zvaniet mums</p></div>
            </a>
            <a href="https://maps.google.com/?q=56.5047,21.0099" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card rounded-lg p-4 hover:bg-secondary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
              <div><p className="font-semibold">Brīvības iela 117a</p><p className="text-sm text-muted-foreground">Liepāja, LV-3401</p></div>
            </a>
            <div className="bg-card rounded-lg p-4">
              <div className="flex items-center gap-4 mb-3"><div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><Clock className="w-5 h-5 text-primary" /></div><p className="font-semibold">Darba laiks</p></div>
              <div className="pl-16 space-y-1 text-sm text-muted-foreground">
                <p>Pirmdiena - Piektdiena: 09:00 - 18:00</p>
                <p>Sestdiena: 09:00 - 14:00</p>
                <p>Svētdiena: Slēgts</p>
              </div>
            </div>
          </div>
          <div className="h-80 lg:h-auto rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.8!2d21.0099!3d56.5047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46facc9e4b3e1b1d%3A0x4c0d4c0d4c0d4c0d!2sBr%C4%ABv%C4%ABbas%20iela%20117a%2C%20Liep%C4%81ja%2C%20LV-3401!5e0!3m2!1slv!2slv!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Revor atrašanās vieta"
            />
          </div>
        </div>
      </div>
    </section>
  );
}