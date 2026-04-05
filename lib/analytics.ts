/**
 * TechFlow Solutions — Analytics helpers
 * Mirrors the original analytics.js tracking functions as typed utilities.
 * Call these from client components after user interactions.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    TechFlowAnalytics: typeof TechFlowAnalytics
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args as unknown as Record<string, unknown>)
}

export const TechFlowAnalytics = {
  trackPhoneClick(phoneNumber: string) {
    gtag('event', 'phone_click', {
      phone_number: phoneNumber,
      event_category: 'contact',
      event_label: 'Phone Click',
      value: 1,
    })
  },

  trackFormSubmission(formType: string, formId: string) {
    gtag('event', `${formType}_form_submit`, {
      form_type: formType,
      form_id: formId,
      event_category: 'form',
      event_label: `${formType} Form Submission`,
      value: 1,
    })
  },

  trackCTAClick(buttonText: string, buttonLocation: string) {
    gtag('event', 'cta_click', {
      button_text: buttonText,
      button_location: buttonLocation,
      event_category: 'engagement',
      event_label: 'CTA Click',
      value: 1,
    })
  },

  trackServicePageView(serviceType: string) {
    gtag('event', 'service_page_view', {
      service_type: serviceType,
      event_category: 'page_view',
      event_label: 'Service Page View',
      value: 1,
    })
  },

  trackExternalLink(url: string, linkText: string) {
    gtag('event', 'external_link_click', {
      link_url: url,
      link_text: linkText,
      event_category: 'engagement',
      event_label: 'External Link Click',
      value: 1,
    })
  },

  trackScrollDepth(percentage: number) {
    gtag('event', 'scroll_depth', {
      scroll_percentage: percentage,
      event_category: 'engagement',
      event_label: 'Scroll Depth',
      value: percentage,
    })
  },
}

// Expose globally for convenience (matches original pattern)
if (typeof window !== 'undefined') {
  window.TechFlowAnalytics = TechFlowAnalytics
}
