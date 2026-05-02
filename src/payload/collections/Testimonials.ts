import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'course', 'rating', 'featured'],
    description: 'Student testimonials and reviews',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Student Name',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role / Company',
      admin: { description: 'e.g. Software Engineer at TCS' },
    },
    {
      name: 'course',
      type: 'text',
      label: 'Course Completed',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
    },
    {
      name: 'rating',
      type: 'select',
      defaultValue: '5',
      options: ['5', '4', '3', '2', '1'].map((v) => ({ label: `${v} Stars`, value: v })),
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile Photo',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Show on Homepage',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 99,
    },
  ],
}
