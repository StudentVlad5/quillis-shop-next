"use client";

import { useState } from "react";

export default function ClientWeatherAlerts({
 title,
  children,
 }: Readonly<{ title: string; children: React.ReactNode }>) {
  // We can only use React state in Client
  // Components.
  const [isOpen, setIsOpen] = useState(false);
  const toggleAlerts = () => setIsOpen(!isOpen);
  return (
    <>
     <div>
      <div
        className="..."
        onClick={toggleAlerts}
      >
        {title}
        <span className="...">
          &#9660; {/* Chevron down icon */}
        </span>
      </div>
      {isOpen && (
        <div className="...">
          {children}
        </div>
      )}
    </div>
    </>
  );
}