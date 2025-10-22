'use client';

import { useCheckout } from '@/lib/hooks/useCheckout';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface CheckoutButtonProps {
  productId: string;
  productName: string;
  price: number;
  currency: string;
}

export default function CheckoutButton({ productId, productName, price, currency }: CheckoutButtonProps) {
  const { proceedToCheckout, loading } = useCheckout();

  return (
    <Button
      onClick={() => proceedToCheckout(productId)}
      disabled={loading}
      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
          Verificando...
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Acquista {productName} - {price} {currency}
        </div>
      )}
    </Button>
  );
}
