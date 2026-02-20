export const caseStudies = {
  'cheerful-ai': {
    id: 'cheerful-ai',
    title: 'Cheerful AI',
    headline: ['An agentic marketing platform', 'for influencer campaigns'],
    tagline: 'Helping marketing agencies run influencer campaigns faster with AI',
    role: 'Product Designer',
    company: 'Nuts & Bolts AI',
    liveUrl: 'https://www.cheerful.ai/',
    heroBentoGrid: true,
    heroBentoTopLeft: '/cheerful-bento-inbox.png',
    heroBentoTopRight: '/cheerful-bento-creators.png',
    heroBentoBottomLeft: '/cheerful-bento-profile.png',
    heroBentoBottomRight: '/cheerful-bento-dashboard.png',
    sections: [
      {
        type: 'problem',
        subtitle: 'The problem',
        heading: ['Marketing agencies needed a better way to manage', 'influencer partnerships at scale'],
        intro: 'Through research with marketing agencies, three main reasons emerged',
        points: [
          { heading: 'Fragmented tools', body: 'Outreach, contracts, and performance lived in different tools, making it hard to see the full picture.' },
          { heading: 'Context', body: 'Without context, campaign data was just numbers—it didn\'t show what was working or why.' },
          { heading: 'Time', body: 'Agencies didn\'t have time to dig through dashboards to find actionable insights.' },
        ],
      },
      {
        type: 'process',
        heading: 'Leading design from 0 to 1',
        body: 'I led the product design for Cheerful AI\'s core experience: dashboard metrics, active campaigns, and creator opt-in flows. The focus was on clarity and action—surfacing total revenue, engagement, and campaign health at a glance so agencies could act quickly.',
        imageCaptions: ['User Research & Journey Mapping', 'Competitive analysis', 'Sketches of the campaign creation process'],
        imageUrls: ['/user-research-journey-mapping.png', '/competitive-analysis.png', '/campaign-creation-sketches.png'],
      },
      {
        type: 'deliverables',
        heading: 'Deliverables',
        tabs: [
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'inbox', label: 'Inbox' },
          { id: 'campaigns', label: 'Campaigns' },
          { id: 'creator-search', label: 'Creator Search' },
        ],
        tabContent: {
          dashboard: [
            'The platform enables marketing agencies to run influencer campaigns for brands with clearer visibility into performance and creator relationships.',
            'Key flows—from campaign creation to opt-in tracking—are designed to reduce friction and support faster decisions.',
          ],
          campaigns: [
            'Campaign creation was previously scattered across spreadsheets, email threads, and separate tools.',
            'The campaigns flow brings everything into a single guided 7-step process — from defining the campaign type and setting up email sequences, to selecting creators and launching — giving teams full visibility and control from one place.',
          ],
          inbox: [
            'Managing creator replies across dozens of campaigns meant endless tab-switching and manual copy-pasting.',
            'The inbox centralizes all creator communication in one place, with AI-generated draft replies that match the campaign\'s tone — so teams can review, edit, and send in seconds instead of starting from scratch every time.',
          ],
          'creator-search': [
            'Finding the right creators used to mean hours of manual scrolling on Instagram and TikTok.',
            'The AI-powered creator search lets teams enter a handle and instantly surface similar profiles — with follower counts, posting frequency, and engagement data — cutting discovery time down from hours to minutes.',
          ],
        },
        tabImages: {
          dashboard: '/dashboard.png',
          inbox: '/inbox.png',
          campaigns: '/campaigns.png',
          'creator-search': '/creator-search.png',
        },
      },
      {
        type: 'problem',
        subtitle: 'The outcome',
        heading: 'From concept to a platform used by real agencies',
        intro: 'The design replaced spreadsheets, Gmail, and manual tracking with one product. Usability testing and client feedback confirmed that core tasks could be done without guidance and that AI outreach cut campaign setup time.',
        points: [
          { heading: '— Agency lead', body: 'We were able to get through setup and launch a campaign in one sitting. That used to take us days across different tools.' },
          { heading: '— Marketing team', body: 'The AI drafts save us hours. We tweak the tone and hit send instead of starting from a blank email every time.' },
          { heading: '— Client feedback', body: 'New people on the team picked it up without training. Everything we need is in one place now.' },
        ],
      },
    ],
    testimonial: null,
  },
  hugsi: {
    id: 'hugsi',
    title: 'Hugsi',
    headline: 'AI-powered gift discovery that learns what makes someone special',
    tagline: 'Hugsi helps people find the perfect gift by learning preferences and matching them to thoughtful options.',
    role: 'Product Designer',
    company: 'Hugsi',
    liveUrl: null,
    heroImage: '/hugsi-hero.png',
    sections: [
      {
        type: 'problem',
        subtitle: 'The problem',
        heading: 'Traditional gift-giving often leads to getting gifts that aren\'t desired.',
        intro: 'Around 5 billion pounds of returned gifts end up in landfills annually, squandering money and exacerbating environmental problems. It\'s crucial to address this issue and protect our natural world.',
        problemImage: '/hugsi-problem.png',
      },
      {
        type: 'process',
        heading: 'The End of Gift Receipts',
        body: 'Hugsi aims to provide a personal and effective gift giving experience, reducing the rate of returns and subsequent waste.\n\nWe started by conducting thorough research, establishing a solid groundwork.',
        imageCaptions: ['', ''],
        imageUrls: ['/hugsi-process-bar.png', '/hugsi-process-pie.png'],
      },
      {
        type: 'deliverables',
        heading: 'Deliverables',
        tabs: [
          { id: 'discovery', label: 'Discovery' },
          { id: 'matching', label: 'Curated Lists' },
          { id: 'gifts', label: 'Profile' },
        ],
        tabContent: {
          discovery: [
            'The discovery flow lets users swipe through gift ideas and teach the app what the recipient might like.',
            'Swipe right to save, left to pass—the model learns preferences and narrows down options over time.',
          ],
          matching: [
            'Explore page featuring curated lists of main gift categories to inspire users without a clear gift idea.',
            'Recommendations from our in-house team to guide users toward thoughtful gift selections.',
          ],
          gifts: [
            'Digitized the gift-tracking process, helping users organize and manage their gift lists effortlessly.',
            'Introduced reminders to ensure users stay on track with purchasing gifts by important dates.',
          ],
        },
        tabImages: {
          discovery: '/hugsi-discovery.png',
          matching: '/hugsi-lists.png',
          gifts: '/hugsi-profile.png',
        },
      },
      {
        type: 'problem',
        subtitle: 'The outcome',
        heading: 'From concept to a learning gift experience',
        intro: 'Hugsi turned gift discovery into a personalized, low-friction flow. Early feedback showed that the swipe pattern felt intuitive and that recommendations improved as users engaged.',
        points: [
          { heading: '— Beta user', body: 'It actually understood what my friend would like.' },
          { heading: '— Beta user', body: 'I found something in minutes that would have taken me an hour of scrolling.' },
          { heading: '— Beta user', body: 'The more I swiped, the better the suggestions got. Felt like it was learning.' },
        ],
      },
    ],
    testimonial: null,
  },
}
