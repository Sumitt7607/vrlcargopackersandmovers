declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GOOGLE_ADS_ID = "AW-18457915255";
export const GOOGLE_ADS_CONTACT_CONVERSION = "AW-18457915255/vp9yCPKb3IwdEPfeteFE";

/**
 * Triggers the Google Ads Contact conversion event.
 * Matches the Google Ads Event Snippet:
 * gtag('event', 'conversion', {
 *   'send_to': 'AW-18457915255/vp9yCPKb3IwdEPfeteFE',
 *   'value': 1.0,
 *   'currency': 'INR'
 * });
 */
export function trackContactConversion(params?: { value?: number; currency?: string }) {
  if (typeof window === "undefined") return;

  const value = params?.value ?? 1.0;
  const currency = params?.currency ?? "INR";

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONTACT_CONVERSION,
      value,
      currency,
    });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push([
      "event",
      "conversion",
      {
        send_to: GOOGLE_ADS_CONTACT_CONVERSION,
        value,
        currency,
      },
    ]);
  }
}
