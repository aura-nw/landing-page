"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TermsModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted terms
    const hasAccepted = localStorage.getItem("termsAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("termsAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-fadeIn">
        {/* Close button */}
        <button
          onClick={handleAccept}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms and Conditions
          </h2>

          <p className="text-sm text-gray-500">
            Last updated: 18 September 2025
          </p>

          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Access from your region may be subject to restrictions. You are
              responsible for compliance with applicable laws in your
              jurisdiction.
            </p>

            <p>
              Aura Network makes no representations regarding the legality of
              access or use in your location.
            </p>

            <p>
              By accessing and using this platform, you agree to Aura Network's{" "}
              <Link
                href="https://images.aura.network/docs/Terms-of-Use.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                Terms and Conditions
              </Link>
              .
            </p>
          </div>

          {/* Accept button */}
          <button
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg py-4 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
