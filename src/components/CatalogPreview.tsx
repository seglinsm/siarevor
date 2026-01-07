import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";

export function CatalogPreview() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await fetchProducts(4);
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <section id="produkti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Produktu katalogs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Kvalitatīva tehnika katrai vajadzībai
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oficiālais STIHL dīleris ar pilnu produktu klāstu profesionāliem un hobija lietotājiem
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-card rounded-lg">
            <p className="text-muted-foreground mb-4">
              Produkti vēl nav pievienoti katalogam.
            </p>
            <p className="text-sm text-muted-foreground">
              Drīzumā šeit parādīsies mūsu produktu klāsts.
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" asChild className="group">
            <Link to="/katalogs">
              Skatīt visu katalogu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}