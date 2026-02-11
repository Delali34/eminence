// ============================================
// FILE: app/Events/[id]/layout.jsx
// PASTE THIS INTO: app/Events/[id]/layout.jsx
// This generates the preview image & description
// when sharing event links on social media.
// ============================================

import { events } from "@/data/events";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    return {
      title: "Event Not Found | Eminence Lead International",
    };
  }

  const siteUrl = "https://www.eminenceleadinternational.org"; // <-- Replace with your actual domain

  return {
    title: `${event.title} | Eminence Lead International`,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      url: `${siteUrl}/Events/${event.id}`,
      siteName: "Eminence Lead International",
      images: [
        {
          url: `${siteUrl}${event.image}`,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.excerpt,
      images: [`${siteUrl}${event.image}`],
    },
  };
}

export default function EventLayout({ children }) {
  return children;
}
