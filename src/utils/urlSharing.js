// URL Sharing Utilities for Political Nakshatra
// Encode/decode quiz results for shareable URLs

/**
 * Validate results object structure and values
 * @param {Object} results - Results object with statism, recognition, sid
 * @returns {boolean} True if valid, false otherwise
 */
export function validateResults(results) {
  if (!results || typeof results !== 'object') {
    return false;
  }

  const required = ['statism', 'recognition', 'sid'];
  if (!required.every(key => key in results)) {
    return false;
  }

  return required.every(key => {
    const val = results[key];
    return typeof val === 'number'
      && !isNaN(val)
      && val >= -1
      && val <= 1;
  });
}

/**
 * Encode results to Base64 URL-safe string
 * @param {Object} results - Results object { statism, recognition, sid }
 * @returns {string} URL-safe Base64 encoded string
 * @throws {Error} If results object is invalid
 */
export function encodeResults(results) {
  if (!validateResults(results)) {
    throw new Error('Invalid results object');
  }

  // Round to 2 decimal places for shorter URLs
  const json = JSON.stringify({
    statism: parseFloat(results.statism.toFixed(2)),
    recognition: parseFloat(results.recognition.toFixed(2)),
    sid: parseFloat(results.sid.toFixed(2))
  });

  const base64 = btoa(json);

  // Make URL-safe: replace + with -, / with _, remove =
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 * Decode Base64 URL-safe string back to results object
 * @param {string} encoded - URL-safe Base64 encoded string
 * @returns {Object|null} Decoded results object or null if invalid
 */
export function decodeResults(encoded) {
  try {
    // Restore Base64 format
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');

    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }

    const json = atob(base64);
    const results = JSON.parse(json);

    if (!validateResults(results)) {
      return null;
    }

    return results;
  } catch (error) {
    console.error('Failed to decode results:', error);
    return null;
  }
}
