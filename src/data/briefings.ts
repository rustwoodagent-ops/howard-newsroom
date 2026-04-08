import { Briefing, TopStory } from "@/types";

export const briefings: Briefing[] = [
  {
    id: "brief-2026-04-06",
    date: "2026-04-06",
    title: "Howard Daily Briefing: Platform Discipline and Inference Economics",
    summary:
      "OpenAI's GPT-4.1 API posture, practical voice model upgrades, and Google's inference-era hardware signal where operator attention should move this quarter.",
    duration: "1:21",
    coverImage: "/assets/audio/briefing-cover.jpg",
    coverAlt: "Howard Newsroom daily briefing cover art with AI control-room motif.",
    audioUrl: "/assets/audio/howard-news-2026-04-06.mp3",
    stories: [
      {
        id: "bs-1",
        headline: "OpenAI positions GPT-4.1 family around production API reliability",
        source: "OpenAI",
        url: "https://openai.com/index/gpt-4-1/",
      },
      {
        id: "bs-2",
        headline: "OpenAI ships next-generation audio models for practical operations",
        source: "OpenAI",
        url: "https://openai.com/index/introducing-our-next-generation-audio-models/",
      },
      {
        id: "bs-3",
        headline: "Google introduces Ironwood TPU for inference-focused workloads",
        source: "Google",
        url: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/ironwood-tpu-age-of-inference/",
      },
      {
        id: "bs-4",
        headline: "Anthropic publishes agentic misalignment stress-test findings",
        source: "Anthropic",
        url: "https://www.anthropic.com/research/agentic-misalignment",
      },
    ],
  },
  {
    id: "brief-2026-04-05",
    date: "2026-04-05",
    title: "Howard Daily Briefing: Platform Control and Safety Pressure",
    summary:
      "The latest AI cycle highlights tighter platform control, pricing pressure, and governance challenges around agent behavior.",
    duration: "1:15",
    coverImage: "/assets/audio/briefing-cover.jpg",
    coverAlt: "Howard Newsroom briefing artwork.",
    audioUrl: "/assets/audio/howard-news-2026-04-05.mp3",
    stories: [
      {
        id: "bs-5",
        headline: "Google expands Gemini switching and context-import tooling",
        source: "Gemini Release Notes",
        url: "https://gemini.google/release-notes/",
      },
      {
        id: "bs-6",
        headline: "Microsoft broadens MAI voice, image, and transcription stack",
        source: "CNET",
        url: "https://www.cnet.com/tech/services-and-software/microsoft-ai-transcribe-image-2-voice-news/",
      },
      {
        id: "bs-7",
        headline: "AP tracks tariff risk through consumer prices and growth pressure",
        source: "AP News",
        url: "https://apnews.com/article/tariffs-economy-inflation-trump-581d89eca9fe17e65d4f515c5b4aea37",
      },
    ],
  },
  {
    id: "brief-2026-04-04",
    date: "2026-04-04",
    title: "Howard Daily Briefing: Capital Scale and Workforce Plumbing",
    summary:
      "OpenAI funding scale, Microsoft's Singapore expansion, and US apprenticeship policy show AI strategy moving into infrastructure and labor execution.",
    duration: "1:13",
    coverImage: "/assets/audio/briefing-cover.jpg",
    coverAlt: "Howard Newsroom briefing artwork.",
    audioUrl: "/assets/audio/howard-news-2026-04-04.mp3",
    stories: [
      {
        id: "bs-8",
        headline: "OpenAI reports $122B round and stronger enterprise revenue mix",
        source: "OpenAI",
        url: "https://openai.com/index/accelerating-the-next-phase-ai/",
      },
      {
        id: "bs-9",
        headline: "Microsoft commits multi-year AI infrastructure spend in Singapore",
        source: "Microsoft News",
        url: "https://news.microsoft.com/source/asia/2026/04/01/microsoft-announces-5-5-billion-spend-and-new-microsoft-elevate-programs-to-support-every-tertiary-student-educator-and-nonprofit-to-power-singapores-ai-future/",
      },
      {
        id: "bs-10",
        headline: "US Labor Department moves AI skills into apprenticeship pathways",
        source: "US Department of Labor",
        url: "https://www.dol.gov/newsroom/releases/eta/eta20260401",
      },
    ],
  },
];

export const latestBriefing: Briefing = briefings[0];

export const topStories: TopStory[] = [
  {
    id: "ts-1",
    headline: "Tariff strategy now being priced as a consumer and growth stress test",
    source: "AP News",
    url: "https://apnews.com/article/tariffs-economy-inflation-trump-581d89eca9fe17e65d4f515c5b4aea37",
    category: "Policy",
    publishedAt: "2026-04-06",
  },
  {
    id: "ts-2",
    headline: "Hormuz escalation risk pushes energy and shipping volatility concerns",
    source: "AP News",
    url: "https://apnews.com/article/iran-us-israel-trump-lebanon-april-5-2026-pilot-cf4a792196259d6e9c066d0be1c57962",
    category: "Geopolitics",
    publishedAt: "2026-04-06",
  },
  {
    id: "ts-3",
    headline: "US federal judges report meaningful AI tool adoption in active workflows",
    source: "Northwestern",
    url: "https://news.northwestern.edu/stories/2026/03/northwestern-study-finds-a-significant-number-of-federal-judges-are-already-using-ai-tools",
    category: "Institutions",
    publishedAt: "2026-04-04",
  },
  {
    id: "ts-4",
    headline: "Labor Department expands AI skills focus through registered apprenticeships",
    source: "US Department of Labor",
    url: "https://www.dol.gov/newsroom/releases/eta/eta20260401",
    category: "Workforce",
    publishedAt: "2026-04-04",
  },
  {
    id: "ts-5",
    headline: "Singapore becomes a key node in long-horizon AI infrastructure planning",
    source: "Microsoft News",
    url: "https://news.microsoft.com/source/asia/2026/04/01/microsoft-announces-5-5-billion-spend-and-new-microsoft-elevate-programs-to-support-every-tertiary-student-educator-and-nonprofit-to-power-singapores-ai-future/",
    category: "Regional",
    publishedAt: "2026-04-04",
  },
];

export const servicesOfferings = [
  {
    id: "svc-1",
    title: "Agent Systems",
    description:
      "Design and ship autonomous agent workflows with bounded autonomy, audit trails, and clear escalation paths.",
    icon: "Bot",
    cta: "See Agent Systems",
    href: "/services#agents",
  },
  {
    id: "svc-2",
    title: "Workflow Automation",
    description:
      "Connect internal tools and external APIs into resilient automation flows that survive production edge cases.",
    icon: "Workflow",
    cta: "View Automation Work",
    href: "/services#automation",
  },
  {
    id: "svc-3",
    title: "AI Operating Model",
    description:
      "Build a practical AI roadmap across platform selection, governance, team capability, and rollout sequencing.",
    icon: "Lightbulb",
    cta: "Talk Strategy",
    href: "/services#consulting",
  },
];
