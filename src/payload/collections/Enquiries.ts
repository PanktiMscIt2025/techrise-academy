import type { CollectionConfig } from 'payload'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'course', 'learningMode', 'createdAt'],
    description: 'Course enquiries from website visitors',
  },
  access: {
    // Anyone can create an enquiry; only admins can read/update/delete
    create: () => true,
    read: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
    },
    {
      name: 'course',
      type: 'select',
      label: 'Interested Course',
      options: [
        { label: 'Full-Stack Web Development', value: 'web-dev' },
        { label: 'AI & Machine Learning', value: 'ai-ml' },
        { label: 'Data Science & Analytics', value: 'data-science' },
        { label: 'Cloud Computing', value: 'cloud' },
        { label: 'DevOps & Automation', value: 'devops' },
        { label: 'Cybersecurity', value: 'cybersecurity' },
        { label: 'Placement Prep Bootcamp', value: 'placement-prep' },
        { label: 'Not sure yet', value: 'undecided' },
      ],
    },
    {
      name: 'learningMode',
      type: 'select',
      label: 'Preferred Learning Mode',
      options: [
        { label: '1:1 Mentorship', value: '1on1' },
        { label: 'Group Batch', value: 'group' },
        { label: 'Video Library', value: 'video' },
      ],
    },
    {
      name: 'qualification',
      type: 'select',
      label: 'Highest Qualification',
      options: [
        { label: 'BCA', value: 'bca' },
        { label: 'MCA', value: 'mca' },
        { label: 'B.E. / B.Tech (CS/IT)', value: 'be-cs' },
        { label: 'BSc IT', value: 'bsc-it' },
        { label: 'MSc IT', value: 'msc-it' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message / Query',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Enrolled', value: 'enrolled' },
        { label: 'Not Interested', value: 'not-interested' },
      ],
    },
  ],
  timestamps: true,
}
