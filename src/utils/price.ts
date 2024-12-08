export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function calculateDiscount(originalPrice: number, discountPercentage: number): number {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}