import { useState, useEffect } from 'react';
import { wedding } from '../config/wedding';

function pad(n) {
  return String(Math.max(0, n)).padStart(2, '0');
}

function getTimeLeft(target) {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      done: true,
    };
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return { days, hours, minutes, seconds, done: false };
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border border-wine border-opacity-30"
        style={{ background: '#FAF7F4' }}
      >
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-wine border-opacity-60" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-wine border-opacity-60" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-wine border-opacity-60" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-wine border-opacity-60" />

        <span className="font-garamond text-3xl md:text-5xl text-wine font-medium tabular-nums">
          {pad(value)}
        </span>
      </div>

      <span className="font-garamond text-xs tracking-[0.25em] uppercase text-muted mt-3">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="font-garamond text-wine text-2xl md:text-4xl mb-6 font-light select-none">
      :
    </span>
  );
}

export default function CountdownTimer() {
  const target = wedding.weddingDate.getTime();

  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  useEffect(() => {
    setMounted(true);

    setTime(getTimeLeft(target));

    const id = setInterval(() => {
      setTime(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  if (time.done) {
    return (
      <div className="text-center py-8">
        <p className="font-script text-wine text-5xl">
          Today is the Day!
        </p>

        <p className="font-garamond text-muted mt-2">
          August 1, 2026
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
      <TimeBox value={time.days} label="Days" />
      <Colon />

      <TimeBox value={time.hours} label="Hours" />
      <Colon />

      <TimeBox value={time.minutes} label="Minutes" />
      <Colon />

      <TimeBox value={time.seconds} label="Seconds" />
    </div>
  );
}