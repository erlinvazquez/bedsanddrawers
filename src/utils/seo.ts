export function generateMetaTags(title: string, description: string, image?: string) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      image: image || '/default-og.jpg',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: image || '/default-og.jpg',
    },
  };
}