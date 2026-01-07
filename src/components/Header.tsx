import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, MapPin, Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/CartDrawer";

const navLinks = [
  { label: "Produkti", href: "/katalogs" },
  { label: "Serviss", href: "/#serviss" },
  { label: "Noma", href: "/#noma" },
  { label: "Par mums", href: "/#par-mums" },
  { label: "Kontakti", href: "/#kontakti" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const totalItems = useCartStore(state => state.getTotalItems());
  const setCartOpen = useCartStore(state => state.setOpen);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  const handleVisitClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("kontakti")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("kontakti")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-2xl md:text-3xl font-bold text-primary tracking-wider">
              REVOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Phone - Desktop Only */}
            <a 
              href="tel:+37129101085" 
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+371 29101085</span>
            </a>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Visit Button */}
            <Button 
              variant="default" 
              size="sm"
              onClick={handleVisitClick}
              className="hidden sm:flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Apmeklēt
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <a 
                href="tel:+37129101085" 
                className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                +371 29101085
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer />
    </header>
  );
}