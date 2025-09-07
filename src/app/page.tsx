"use client";

// Extend Window interface for Umami
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, any>) => void;
    };
  }
}

export default function Home() {
  const handleGoogleClick = () => {
    // Track the button click event in Umami
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("Button Click", {
        target: "Google Link",
        url: "http://bit.ly/3VDkjWa",
      });
    }

    window.open("http://bit.ly/3VDkjWa", "_blank");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <button
          onClick={handleGoogleClick}
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Click here to open Google
        </button>
      </div>
    </main>
  );
}
