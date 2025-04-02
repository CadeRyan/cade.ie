import React from 'react';

// Define metadata for the page
export const metadata = {
  title: 'Susanne & Cade - Wedding Prototype',
  description: 'Figma prototype embed for Susanne and Cade wedding details.',
};

export default function WeddingPage() {
  return (
    // Container to fill the viewport
    <div className="w-screen h-screen"> {/* Fill width and height of the screen */}
      <iframe
        // Removed inline style for border
        className="w-full h-full border-none" // Use classes to ensure full size and no border
        src="https://embed.figma.com/proto/J6YmmXDpOu9WCKBmyP8lAm/Untitled?node-id=1-2&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share&hide-ui=1" // Added &hide-ui=1
        allowFullScreen
        title="Wedding Figma Prototype"
      ></iframe>
    </div>
  );
}
