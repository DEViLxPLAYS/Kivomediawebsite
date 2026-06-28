import { ServicePageLayout } from "@/app/components/ServicePageLayout";

const faqs = [
  {
    question: "What types of video editing does ZROXZ do?",
    answer:
      "We handle YouTube long-form editing, short-form content (Reels, TikTok, Shorts), promotional and brand videos, explainer animations, podcast video editing, and AI motion design/visual effects.",
  },
  {
    question: "How long does video editing take?",
    answer:
      "Turnaround time depends on video length and complexity. A 10-minute YouTube video typically takes 3–5 business days. Short-form content (60 seconds) takes 1–2 days. Rush delivery is available.",
  },
  {
    question: "What file formats do you accept for raw footage?",
    answer:
      "We accept all common video formats: MP4, MOV, MXF, AVI, and RAW formats from cameras. For screen recordings, we accept any format. Footage can be delivered via Google Drive, Dropbox, or WeTransfer.",
  },
  {
    question: "Do you create thumbnails as well?",
    answer:
      "Yes. YouTube thumbnail design is available as an add-on. We create click-optimized thumbnails using proven design patterns — high contrast, readable text, and compelling imagery.",
  },
  {
    question: "Can you edit in a specific style or match a reference video?",
    answer:
      "Absolutely. We start every new client with a style questionnaire and ask for reference videos you like. Your first video includes unlimited revisions until the style is exactly right.",
  },
];

export function VideoEditingService() {
  return (
    <ServicePageLayout
      title="Video Editing & AI Motion Design for US Brands and Creators"
      h1="Video Editing & AI Motion Design for US Brands and Creators"
      metaDescription="ZROXZ provides professional video editing and AI motion design for US brands, YouTubers, and content creators. Fast turnaround, premium quality, and AI-enhanced effects."
      canonicalUrl="https://zroxz.com/services/video-editing"
      keywords="video editing agency, video editing for YouTube, AI motion design, video editing for small business, content creator video editing"
      category="Video Editing"
      faqs={faqs}
      pricing={{ price: "$150", label: "Per video · Monthly packages from $500 · Book for custom quote" }}
    >
      <p>
        Video is the highest-performing content format in 2025 — but producing it consistently is time-consuming
        and technically demanding. ZROXZ delivers <strong>professional video editing and AI motion design</strong>{" "}
        so you can focus on creating content and running your business while we handle the production side.
      </p>

      <h2>Video Services We Offer</h2>
      <ul>
        <li>
          <strong>YouTube long-form editing:</strong> Full editing of 5–60 minute videos with cuts, color
          grading, music, captions, chapter markers, and end screens
        </li>
        <li>
          <strong>Short-form content:</strong> Reels, TikToks, and YouTube Shorts cut from long-form content
          or produced from raw footage — optimized for each platform's format
        </li>
        <li>
          <strong>Brand/promo videos:</strong> 60–90 second promotional videos for websites, ads, and social media
        </li>
        <li>
          <strong>AI motion design:</strong> AI-generated visual effects, animated titles, kinetic typography,
          and motion graphics created using RunwayML, Pika, and After Effects
        </li>
        <li>
          <strong>Podcast video editing:</strong> Multi-camera podcast editing with lower thirds, B-roll
          insertion, and episode highlights
        </li>
        <li>
          <strong>Explainer animations:</strong> Animated explainer videos for products, services, or onboarding
        </li>
      </ul>

      <h2>What Makes ZROXZ Video Editing Different</h2>
      <ul>
        <li>
          <strong>AI-enhanced production:</strong> We use AI tools (RunwayML, ElevenLabs for voiceover,
          Udio for background music) to produce higher quality content faster and at lower cost
        </li>
        <li>
          <strong>Brand consistency:</strong> We maintain your color palette, font system, and visual style
          across every piece of content we produce
        </li>
        <li>
          <strong>Platform optimization:</strong> Different aspect ratios, caption styles, and pacing
          for YouTube, Instagram, TikTok, and LinkedIn — not one-size-fits-all
        </li>
        <li>
          <strong>Fast turnaround:</strong> 3–5 business days for long-form, 1–2 days for short-form.
          Rush delivery available for urgent content
        </li>
        <li>
          <strong>Unlimited revisions on first video:</strong> We get your style right from the start
          so future projects require minimal changes
        </li>
      </ul>

      <h2>Our Production Tools</h2>
      <ul>
        <li><strong>Editing:</strong> Adobe Premiere Pro, DaVinci Resolve</li>
        <li><strong>Motion graphics:</strong> Adobe After Effects, Motion</li>
        <li><strong>AI video:</strong> RunwayML, Pika, Kling AI</li>
        <li><strong>Color grading:</strong> DaVinci Resolve Color Science</li>
        <li><strong>Audio:</strong> Adobe Audition, iZotope RX</li>
        <li><strong>Thumbnails:</strong> Adobe Photoshop + Canva Pro</li>
      </ul>

      <h2>Pricing Overview</h2>
      <ul>
        <li><strong>Short-form video (under 90 seconds):</strong> $50–$100 per video</li>
        <li><strong>Long-form YouTube (5–30 minutes):</strong> $150–$300 per video</li>
        <li><strong>Long-form YouTube (30–60 minutes):</strong> $250–$500 per video</li>
        <li><strong>Brand/promo video:</strong> $300–$800 depending on complexity</li>
        <li><strong>Monthly package (4 long-form + 8 short-form):</strong> From $700/month</li>
      </ul>

      <h2>Who We Work With</h2>
      <ul>
        <li>YouTube creators building consistent content schedules</li>
        <li>Coaches, consultants, and course creators</li>
        <li>US small businesses creating marketing content</li>
        <li>Brands producing product demos and social ads</li>
        <li>Podcasters moving into video content</li>
      </ul>
    </ServicePageLayout>
  );
}
