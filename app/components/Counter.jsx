    
    "use client"; // Important for client-side interactivity in Next.js

    import { useEffect, useState } from "react";

    const Counter = ({ targetNumber }) => {
      const [displayNumber, setDisplayNumber] = useState(0);

      useEffect(() => {
        let start = 0;
        const duration = 1500; // Animation duration in milliseconds
        const increment = targetNumber / (duration / 16); // ~60fps

        const counter = setInterval(() => {
          start += increment;
          if (start >= targetNumber) {
            setDisplayNumber(targetNumber);
            clearInterval(counter);
          } else {
            setDisplayNumber(Math.floor(start));
          }
        }, 16); // Update roughly every 16ms for 60fps

        return () => clearInterval(counter); // Cleanup on unmount
      }, [targetNumber]);

      return (
        <div className="text-5xl font-bold text-blue-600">
          {displayNumber.toLocaleString()}
        </div>
      );
    };

    export default Counter;