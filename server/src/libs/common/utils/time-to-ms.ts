/**
 * Converts time strings to milliseconds
 * Supports formats like: 30d, 7d, 24h, 60m, 30s
 * @param timeString - Time string in format like "30d", "24h", "60m", "30s"
 * @returns Number of milliseconds
 */
export const timeToMs = (timeString: string): number => {
  const match = timeString.match(/^(\d+)([dhms])$/);

  if (!match) {
    throw new Error(
      `Invalid time format: ${timeString}. Expected format like "30d", "24h", "60m", "30s"`,
    );
  }

  const [, value, unit] = match;
  const numValue = parseInt(value, 10);

  if (isNaN(numValue) || numValue < 0) {
    throw new Error(`Invalid time value: ${value}. Must be a positive number.`);
  }

  const multipliers = {
    d: 24 * 60 * 60 * 1000, // days to milliseconds
    h: 60 * 60 * 1000, // hours to milliseconds
    m: 60 * 1000, // minutes to milliseconds
    s: 1000, // seconds to milliseconds
  };

  return numValue * multipliers[unit as keyof typeof multipliers];
};

/**
 * Converts milliseconds to human-readable time string
 * @param ms - Number of milliseconds
 * @returns Human-readable time string
 */
export const msToTimeString = (ms: number): string => {
  if (ms < 0) {
    throw new Error('Time value must be positive');
  }

  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((ms % (60 * 1000)) / 1000);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0) parts.push(`${seconds}s`);

  return parts.length > 0 ? parts.join(' ') : '0s';
};

// Example usage and common time constants
export const TIME_CONSTANTS = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000, // Approximate
  YEAR: 365 * 24 * 60 * 60 * 1000, // Approximate
} as const;
