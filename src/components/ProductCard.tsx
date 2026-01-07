import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProduct, formatPrice, CartItem } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const setCartOpen = useCartStore(state => state.setOpen);
  
  const { node } = product;
  const image = node.images?.edges?.[0]?.node;
  const firstVariant = node.variants?.edges?.[0]?.node;
  const price = node.priceRange?.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error("Produkts nav pieejams");
      return;
    }

    const cartItem: CartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    };
    
    addItem(cartItem);
    toast.success("Pievienots grozam", {
      description: node.title,
      action: {
        label: "Skatīt grozu",
        onClick: () => setCartOpen(true),
      },
    });
  };

  return (
    <Link 
      to={`/produkts/${node.handle}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-square bg-muted overflow-hidden relative">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Nav attēla
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Pievienot grozam
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {node.title}
        </h3>
        
        {node.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {node.description}
          </p>
        )}
        
        {price && (
          <p className="text-xl font-bold text-primary mt-3">
            {formatPrice(price.amount, price.currencyCode)}
          </p>
        )}
      </div>
    </Link>
  );
}