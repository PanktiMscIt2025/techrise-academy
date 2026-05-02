import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'track', 'level', 'featured'],
    description: 'TechRise flagship technology tracks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Course Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: { description: 'e.g. web-development, ai-ml, placement-prep' },
    },
    {
      name: 'track',
      type: 'select',
      required: true,
      options: [
        { label: 'Track 1: Full-Stack Web Dev', value: 'web-dev' },
        { label: 'Track 2: AI & Machine Learning', value: 'ai-ml' },
        { label: 'Track 3: Data Science & Analytics', value: 'data-science' },
        { label: 'Track 4: Cloud Computing', value: 'cloud' },
        { label: 'Track 5: DevOps & Automation', value: 'devops' },
        { label: 'Track 6: Cybersecurity', value: 'cybersecurity' },
        { label: 'Track 7: Placement Prep Bootcamp', value: 'placement-prep' },
      ],
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Short Tagline',
      admin: { description: 'Shown under the title on the courses page' },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Course Description',
    },
    {
      name: 'level',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration',
      admin: { description: 'e.g. 4 months, 6 months' },
    },
    {
      name: 'modules',
      type: 'number',
      label: 'Number of Modules',
    },
    {
      name: 'priceVideo',
      type: 'number',
      label: 'Video Library Price (₹)',
      defaultValue: 8000,
    },
    {
      name: 'priceGroup',
      type: 'number',
      label: 'Group Batch Price (₹)',
      defaultValue: 18000,
    },
    {
      name: 'price1on1',
      type: 'number',
      label: '1:1 Mentorship Price (₹)',
      defaultValue: 38000,
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills Covered',
      fields: [{ name: 'skill', type: 'text' }],
    },
    {
      name: 'colorTheme',
      type: 'select',
      label: 'Card Color Theme',
      defaultValue: 'saffron',
      options: [
        { label: 'Saffron', value: 'saffron' },
        { label: 'Blue', value: 'blue' },
        { label: 'Purple', value: 'purple' },
        { label: 'Green', value: 'green' },
        { label: 'Red', value: 'red' },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon Emoji',
      admin: { description: 'e.g. 💻, 🤖, 📊, ☁️, ⚙️, 🔒, 🎯' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured on Homepage',
      defaultValue: false,
    },
    {
      name: 'mostPopular',
      type: 'checkbox',
      label: 'Mark as Most Popular',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
    },
  ],
}
