import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { Services } from "@/app/pages/Services";
import { Work } from "@/app/pages/Work";
import { Process } from "@/app/pages/Process";
import { About } from "@/app/pages/About";
import { Contact } from "@/app/pages/Contact";
import { BookUs } from "@/app/pages/BookUs";
import { Layout } from "@/app/components/Layout";

// Service Landing Pages
import { AIChatbotsService } from "@/app/pages/services/AIChatbotsService";
import { AIVoiceAgentsService } from "@/app/pages/services/AIVoiceAgentsService";
import { CRMAutomationService } from "@/app/pages/services/CRMAutomationService";
import { N8nWorkflowsService } from "@/app/pages/services/N8nWorkflowsService";
import { GoHighLevelService } from "@/app/pages/services/GoHighLevelService";
import { WebDevelopmentService } from "@/app/pages/services/WebDevelopmentService";
import { SaaSDevelopmentService } from "@/app/pages/services/SaaSDevelopmentService";
import { VideoEditingService } from "@/app/pages/services/VideoEditingService";

// Case Studies
import { EvinnCaseStudy } from "@/app/pages/case-studies/EvinnCaseStudy";

// Blog
import { BlogIndex } from "@/app/pages/blog/BlogIndex";
import { HowAIVoiceAgentsWork } from "@/app/pages/blog/posts/HowAIVoiceAgentsWork";
import { AIChatbotVsLiveChat } from "@/app/pages/blog/posts/AIChatbotVsLiveChat";
import { GoHighLevelAutomationGuide } from "@/app/pages/blog/posts/GoHighLevelAutomationGuide";
import { N8nVsZapierVsMake } from "@/app/pages/blog/posts/N8nVsZapierVsMake";
import { AIAutomationForDentalClinics } from "@/app/pages/blog/posts/AIAutomationForDentalClinics";
import { ReplaceReceptionistWithAI } from "@/app/pages/blog/posts/ReplaceReceptionistWithAI";
import { BestAIToolsSmallBusiness } from "@/app/pages/blog/posts/BestAIToolsSmallBusiness";
import { GoHighLevelForRealEstate } from "@/app/pages/blog/posts/GoHighLevelForRealEstate";
import { AILeadGenerationAutomation } from "@/app/pages/blog/posts/AILeadGenerationAutomation";
import { N8nWorkflowLeadGeneration } from "@/app/pages/blog/posts/N8nWorkflowLeadGeneration";
import { AIAgencyVsFreelancer } from "@/app/pages/blog/posts/AIAgencyVsFreelancer";
import { WebDevForUSBusinesses } from "@/app/pages/blog/posts/WebDevForUSBusinesses";

// Locations
import { USALocation } from "@/app/pages/locations/USALocation";
import { CanadaLocation } from "@/app/pages/locations/CanadaLocation";
import { CaliforniaLocation } from "@/app/pages/locations/CaliforniaLocation";
import { TexasLocation } from "@/app/pages/locations/TexasLocation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // Core pages
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "work", Component: Work },
      { path: "process", Component: Process },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "book-us", Component: BookUs },
      { path: "book", Component: BookUs },

      // Service Landing Pages
      { path: "services/ai-chatbots", Component: AIChatbotsService },
      { path: "services/ai-voice-agents", Component: AIVoiceAgentsService },
      { path: "services/crm-automation", Component: CRMAutomationService },
      { path: "services/n8n-workflows", Component: N8nWorkflowsService },
      { path: "services/gohighlevel", Component: GoHighLevelService },
      { path: "services/web-development", Component: WebDevelopmentService },
      { path: "services/saas-development", Component: SaaSDevelopmentService },
      { path: "services/video-editing", Component: VideoEditingService },

      // Case Studies
      { path: "case-studies/evinn-ai-voice-agent", Component: EvinnCaseStudy },

      // Locations
      { path: "locations/usa", Component: USALocation },
      { path: "locations/canada", Component: CanadaLocation },
      { path: "locations/california", Component: CaliforniaLocation },
      { path: "locations/texas", Component: TexasLocation },

      // Blog
      { path: "blog", Component: BlogIndex },
      { path: "blog/how-ai-voice-agents-work-2025", Component: HowAIVoiceAgentsWork },
      { path: "blog/ai-chatbot-vs-live-chat", Component: AIChatbotVsLiveChat },
      { path: "blog/gohighlevel-automation-guide", Component: GoHighLevelAutomationGuide },
      { path: "blog/n8n-vs-zapier-vs-make", Component: N8nVsZapierVsMake },
      { path: "blog/ai-automation-for-dental-clinics", Component: AIAutomationForDentalClinics },
      { path: "blog/replace-receptionist-with-ai", Component: ReplaceReceptionistWithAI },
      { path: "blog/best-ai-tools-for-small-business-2025", Component: BestAIToolsSmallBusiness },
      { path: "blog/gohighlevel-for-real-estate", Component: GoHighLevelForRealEstate },
      { path: "blog/ai-lead-generation-automation", Component: AILeadGenerationAutomation },
      { path: "blog/n8n-workflow-for-lead-generation", Component: N8nWorkflowLeadGeneration },
      { path: "blog/ai-automation-agency-vs-freelancer", Component: AIAgencyVsFreelancer },
      { path: "blog/web-development-for-us-businesses", Component: WebDevForUSBusinesses },
    ],
  },
]);

