// Application Configuration
export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Personal Portfolio',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Full Stack Engineer Portfolio'
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@alex.dev',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+1 (555) 000-0000'
  },
  social: {
    github: import.meta.env.VITE_GITHUB_URL || '#',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || '#',
    twitter: import.meta.env.VITE_TWITTER_URL || '#'
  },
  personal: {
    fullName: import.meta.env.VITE_FULL_NAME || 'Alex Dev',
    location: import.meta.env.VITE_LOCATION || 'San Francisco',
    brandName: import.meta.env.VITE_BRAND_NAME || 'ALEX DEV©'
  }
};
