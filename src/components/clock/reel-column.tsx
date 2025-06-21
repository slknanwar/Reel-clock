
import { cn } from "@/lib/utils";

interface ReelColumnProps {
  digit: number;
  ariaLabel?: string;
  visibleDigits?: number; // How many digits are visible in the viewport (e.g., 5 for a taller reel)
  maxPossibleDigitValue?: number; // The highest number this reel can show (e.g., 2 for h1, 5 for m1/s1, 9 for others)
  isMobile?: boolean;
}

// Updated heights based on responsive design
const DESKTOP_REEL_CELL_HEIGHT_REM = 3; // Height of each number cell on desktop
const MOBILE_REEL_CELL_HEIGHT_REM = 2.5; // Height of each number cell on mobile

export default function ReelColumn({
  digit,
  ariaLabel,
  visibleDigits, // Number of digits visible in the "window"
  maxPossibleDigitValue, // e.g., 2 for H1, 5 for M1/S1, 9 for H2/M2/S2
  isMobile,
}: ReelColumnProps) {
  const V_DIGITS_IN_VIEWPORT = visibleDigits ?? (isMobile ? 5 : 7);
  const MAX_DIGIT_ON_REEL = maxPossibleDigitValue ?? 9;

  const stripDigits = Array.from({ length: MAX_DIGIT_ON_REEL + 1 }, (_, i) => i);

  const currentTileHeightRem = isMobile ? MOBILE_REEL_CELL_HEIGHT_REM : DESKTOP_REEL_CELL_HEIGHT_REM;
  const slotHeightRem = currentTileHeightRem;

  const translateYValue = (V_DIGITS_IN_VIEWPORT / 2 - 0.5 - digit) * slotHeightRem;
  const reelViewportHeightRem = V_DIGITS_IN_VIEWPORT * currentTileHeightRem;
  const scrollingStripHeightRem = (MAX_DIGIT_ON_REEL + 1) * currentTileHeightRem;

  const reelContainerWidthClass = isMobile ? "w-10" : "w-12";
  const highlightSizeClass = isMobile ? "w-8 h-8" : "w-10 h-10";

  const tileHeightClass = isMobile ? "h-10" : "h-12"; // Corresponds to 2.5rem and 3rem
  const tileTextSizeClass = isMobile ? "text-2xl" : "text-3xl";

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center", // Main container, acts as viewport
        reelContainerWidthClass,
        "rounded-xl shadow-md" // Rounded corners and shadow on the main container
      )}
      style={{ height: `${reelViewportHeightRem}rem` }}
      role="timer"
      aria-label={ariaLabel || `current digit ${digit}`}
    >
      {/* Highlight circle - should be on top of the scrolling numbers */}
      <div
        className={cn(
          "absolute rounded-full bg-accent pointer-events-none",
          highlightSizeClass,
          "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 z-10"
        )}
        aria-hidden="true"
      ></div>

      {/* This is the scrolling strip of digits */}
      <div
        className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out rounded-xl overflow-hidden" // Added rounded-xl and overflow-hidden
        style={{
          transform: `translateY(${translateYValue}rem)`,
          height: `${scrollingStripHeightRem}rem`, // Explicit height for the scrolling strip
        }}
        aria-hidden="true"
      >
        {stripDigits.map((num) => (
          <div
            key={num}
            className={cn(
              "flex items-center justify-center w-full font-bold",
              "bg-primary text-primary-foreground", // Background color applied to each digit's cell
              tileHeightClass,
              tileTextSizeClass
            )}
          >
            {num}
          </div>
        ))}
      </div>
      <span className="sr-only">{digit}</span> {/* For accessibility */}
    </div>
  );
}
