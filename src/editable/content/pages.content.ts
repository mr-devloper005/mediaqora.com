import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press release publishing, and news syndication',
      description: 'Distribute press releases, campaign news, and brand announcements through a professional media outreach and syndication platform.',
      openGraphTitle: 'Media distribution and press release publishing',
      openGraphDescription: 'Reach journalists, publishers, and digital audiences with newsroom-ready campaign distribution.',
      keywords: ['media distribution', 'press release publishing', 'news syndication', 'PR campaigns', 'media outreach'],
    },
    hero: {
      badge: 'Global media distribution',
      title: ['Distribute your story', 'to the right media channels.'],
      description: 'Launch press releases, PR campaigns, founder news, product updates, and brand announcements across a structured media distribution workflow.',
      primaryCta: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryCta: { label: 'Plan a release', href: '/create' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and releases',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for brands that need credible visibility, not noisy publishing.',
      paragraphs: [
        'The platform organizes announcements, campaign assets, publisher context, and distribution outcomes into a single professional media hub.',
        'Marketing teams, startups, agencies, and founders can present press-ready stories with the structure journalists and partners expect.',
        'Every page is designed around visibility: clear headlines, stronger campaign context, and direct paths from discovery to action.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start distributing',
      title: 'Put your next announcement in front of more media opportunities.',
      description: 'Prepare a campaign, organize the details, and make your story easier for publishers, journalists, and audiences to discover.',
      primaryCta: { label: 'Browse Campaigns', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Media distribution partner',
    title: 'A clearer way to publish campaigns, amplify news, and build digital visibility.',
    description: `${slot4BrandConfig.siteName} helps teams package announcements into media-ready campaigns built for discovery, syndication, and trust.`,
    paragraphs: [
      'We help brands, PR agencies, creators, and publishers present announcements with the hierarchy, metadata, and credibility signals modern distribution needs.',
      'From launch notes and executive updates to market announcements and brand stories, the experience keeps campaign details easy to scan and easy to act on.',
    ],
    values: [
      {
        title: 'Press-ready presentation',
        description: 'Campaigns are structured for fast editorial review with clear headlines, context, categories, and supporting details.',
      },
      {
        title: 'Distribution-focused discovery',
        description: 'Archive, search, and detail pages make media reach, industry fit, and campaign status visible before the first click.',
      },
      {
        title: 'Trustworthy media workflow',
        description: 'A consistent interface helps teams, publishers, and decision-makers understand what was published and why it matters.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to us about your next media distribution campaign.',
    description: 'Share your release goals, target industries, audience priorities, or publisher outreach needs. We will help route the request to the right distribution path.',
    formTitle: 'Campaign inquiry',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search press releases, campaigns, industries, publishers, and media distribution content across the site.',
    },
    hero: {
      badge: 'Search distribution archive',
      title: 'Find campaigns, releases, and publisher-ready stories faster.',
      description: 'Use keywords, categories, industries, and content types to discover media distribution activity across the site.',
      placeholder: 'Search by campaign, brand, industry, publisher, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a media distribution campaign or press release for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to prepare a distribution campaign.',
      description: 'Use your account to open the publishing workspace, draft a press release, and prepare campaign details for review.',
    },
    hero: {
      badge: 'Campaign workspace',
      title: 'Build a press-ready media distribution submission.',
      description: 'Choose the campaign type, add publisher context, include source URLs, and prepare the story for a professional distribution workflow.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your media distribution workspace.',
      description: 'Login to manage campaign submissions, prepare press releases, and continue building visibility for your brand.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the campaign workspace, save release details, and submit media distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
