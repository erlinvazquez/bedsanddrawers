export function generateAffiliateLink(baseUrl: string, productId: string, affiliateId: string): string {
  const url = new URL(baseUrl);
  url.searchParams.append('ref', affiliateId);
  url.searchParams.append('pid', productId);
  return url.toString();
}

export function addAffiliateDisclosure(): string {
  return "This post contains affiliate links. We may earn a commission if you make a purchase through these links.";
}