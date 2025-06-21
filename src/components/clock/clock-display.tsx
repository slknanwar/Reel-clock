import ReelColumn from "./reel-column";

interface ClockDisplayProps {
  h1: string;
  h2: string;
  m1: string;
  m2: string;
  s1: string;
  s2: string;
  isMobile?: boolean;
}

export default function ClockDisplay({ h1, h2, m1, m2, s1, s2, isMobile }: ClockDisplayProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-1 sm:space-x-2" role="group" aria-label="Current time">
        <ReelColumn digit={parseInt(h1, 10)} maxPossibleDigitValue={2} visibleDigits={3} ariaLabel={`Hours, first digit: ${h1}`} isMobile={isMobile} />
        <ReelColumn digit={parseInt(h2, 10)} maxPossibleDigitValue={9} visibleDigits={10} ariaLabel={`Hours, second digit: ${h2}`} isMobile={isMobile} />
        <div className="w-1.5 sm:w-2.5" aria-hidden="true"></div> {/* Spacer */}
        <ReelColumn digit={parseInt(m1, 10)} maxPossibleDigitValue={5} visibleDigits={6} ariaLabel={`Minutes, first digit: ${m1}`} isMobile={isMobile} />
        <ReelColumn digit={parseInt(m2, 10)} maxPossibleDigitValue={9} visibleDigits={10} ariaLabel={`Minutes, second digit: ${m2}`} isMobile={isMobile} />
        <div className="w-1.5 sm:w-2.5" aria-hidden="true"></div> {/* Spacer */}
        <ReelColumn digit={parseInt(s1, 10)} maxPossibleDigitValue={5} visibleDigits={6} ariaLabel={`Seconds, first digit: ${s1}`} isMobile={isMobile} />
        <ReelColumn digit={parseInt(s2, 10)} maxPossibleDigitValue={9} visibleDigits={10} ariaLabel={`Seconds, second digit: ${s2}`} isMobile={isMobile} />
      </div>
    </div>
  );
}
