import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
export function Footer() {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-primary tracking-wider">
                REVOR
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oficiālais STIHL dīleris Liepājā. Profesionāla meža un dārza tehnika, serviss un motokrosa noma.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Kontakti</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+37129101085" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +371 29101085
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Brīvības+iela+117A,+Liepāja" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Brīvības iela 117A, Liepāja, LV-3401
                </a>
              </li>
              <li>
                <a href="mailto:info@revor.lv" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  info@revor.lv
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Darba laiks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Pirmdiena - Piektdiena</span>
              </li>
              <li className="pl-6">09:00 - 18:00</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Sestdiena - Slēgts
              </span>
              </li>
              
              <li className="pl-6 mt-2 text-inherit">Svētdiena — Slēgts</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Saites</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/katalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Produktu katalogs
                </Link>
              </li>
              <li>
                <a href="/#serviss" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviss & Remonts
                </a>
              </li>
              <li>
                <a href="/#noma" className="text-muted-foreground hover:text-foreground transition-colors">
                  Motokrosa noma
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Revor,+SIA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Google atsauksmes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SIA Revor. Visas tiesības aizsargātas.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Pieņemam: Skaidra nauda, Visa, Mastercard</span>
          </div>
        </div>
      </div>
    </footer>;
}