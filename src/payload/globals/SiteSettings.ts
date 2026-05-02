import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    description: 'Global site settings — contact info, social links, announcement bar',
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      label: 'WhatsApp / Phone Number',
      defaultValue: '+91 81600 49448',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'techrisewithai@gmail.com',
    },
    {
      name: 'whatsappUrl',
      type: 'text',
      label: 'WhatsApp URL',
      defaultValue: 'https://wa.me/918160049448',
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      label: 'YouTube Channel URL',
      defaultValue: 'https://www.youtube.com/@TechRiseAcademy-w3k',
    },
    {
      name: 'announceBar',
      type: 'group',
      label: 'Announcement Bar',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'text',
          type: 'text',
          defaultValue: '🚀 New batch starting May 2025 · Limited seats available',
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'CTA Button Text',
          defaultValue: 'Enrol Now →',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          label: 'CTA URL',
          defaultValue: '/contact',
        },
      ],
    },
  ],
}
