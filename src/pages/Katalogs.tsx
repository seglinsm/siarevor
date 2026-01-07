import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";

const Katalogs = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts(50);
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Produktu katalogs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Pilns STIHL, Husqvarna un Stiga produktu klāsts profesionāliem un hobija lietotājiem</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => <ProductCard key={product.node.id} product={product} />)}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-lg">
              <p className="text-xl font-semibold mb-2">Produkti vēl nav pievienoti</p>
              <p className="text-muted-foreground">Drīzumā šeit parādīsies mūsu produktu klāsts.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Katalogs;