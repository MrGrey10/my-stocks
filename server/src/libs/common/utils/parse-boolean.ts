/**
 * Parses a string to boolean value
 * @param value - String value to parse ("true" or "false")
 * @returns Boolean value
 * @throws Error if the string is not "true" or "false"
 */
export const parseBoolean = (value: string): boolean => {
  const normalizedValue = value.toLowerCase().trim();

  if (normalizedValue === 'true') {
    return true;
  }

  if (normalizedValue === 'false') {
    return false;
  }

  throw new Error(
    `Invalid boolean string: "${value}". Expected "true" or "false".`,
  );
};

/**
 * Safely parses a string to boolean with a default value
 * @param value - String value to parse
 * @param defaultValue - Default value to return if parsing fails
 * @returns Boolean value or default value
 */
export const parseBooleanSafe = (
  value: string,
  defaultValue: boolean = false,
): boolean => {
  try {
    return parseBoolean(value);
  } catch {
    return defaultValue;
  }
};

/**
 * Checks if a string represents a valid boolean value
 * @param value - String value to check
 * @returns True if the string is "true" or "false" (case insensitive)
 */
export const isValidBooleanString = (value: string): boolean => {
  const normalizedValue = value.toLowerCase().trim();
  return normalizedValue === 'true' || normalizedValue === 'false';
};
