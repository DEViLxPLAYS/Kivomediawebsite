import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";

const faqs = [
  {
    question: "What does a GoHighLevel setup include?",
    answer:
      "Our done-for-you GHL setup includes: account configuration, sub-account setup, pipeline creation, lead stages, automation workflows (missed call text-back, appointment reminders, follow-up sequences), calendar integration, website widget or funnel, and team training.",
  },
  {
    question: "How much does GoHighLevel cost per month?",
    answer:
      "GoHighLevel costs $97/month (Starter) or $297/month (Unlimited) directly from GHL. ZROXZ charges a one-time setup fee on top of that — not an ongoing markup. Some clients use our agency account at a discounted rate.",
  },
  {
    question: "Can I manage GoHighLevel myself after you set it up?",
    answer:
      "Absolutely. We provide full training on how to use the platform, manage contacts, and monitor automations. For clients who want us to continue running it, we offer ongoing management retainers.",
  },
  {
    question: "Do you migrate data from my existing CRM to GoHighLevel?",
    answer:
      "Yes. We handle contact migration from HubSpot, Salesforce, Pipedrive, spreadsheets, or any other source. We map your existing fields, import contacts, and verify data integrity before going live.",
  },
  {
    question: "Does GoHighLevel work for agencies?",
    answer:
      "Yes — GoHighLevel was actually built with agencies in mind. The Agency Pro plan ($497/month) lets you white-label the platform and resell it to clients. ZROXZ can set this up for marketing agencies who want to offer GHL as a service.",
  },
];

export function GoHighLevelService() {
  return (
    <ServicePageLayout
      title="GoHighLevel Setup & Automation Agency — Done-For-You GHL"
      h1="GoHighLevel Setup & Automation Agency — Done-For-You GHL"
      metaDescription="ZROXZ sets up and automates GoHighLevel for US service businesses in 7 days. Full pipeline setup, automation workflows, CRM migration, and team training included."
      canonicalUrl="https://zroxz.com/services/gohighlevel"
      keywords="GoHighLevel setup, GoHighLevel agency, GHL automation, done for you GoHighLevel, GoHighLevel CRM setup"
      category="GoHighLevel"
      faqs={faqs}
      pricing={{ price: "$800", label: "Basic GHL setup · Full automation from $1,500 · Book for quote" }}
    >
      <p>
        GoHighLevel is the most powerful all-in-one CRM and marketing platform for US service businesses — but
        only if it's set up correctly. Most businesses who buy GHL on their own spend weeks trying to figure it
        out, build broken automations, and eventually abandon it. ZROXZ does it for you, from day one, in 7 days.
      </p>

      <h2>What's Included in a ZROXZ GHL Setup</h2>
      <ul>
        <li>Account and sub-account configuration</li>
        <li>Custom pipeline stages matched to your sales process</li>
        <li>Missed call text-back automation</li>
        <li>Appointment booking and calendar integration (Google, Outlook, Calendly)</li>
        <li>Lead follow-up sequences (email + SMS)</li>
        <li>Appointment reminder sequences (24h, 1h, 15min)</li>
        <li>Review request automation post-service</li>
        <li>Lead source tracking and tagging</li>
        <li>Website chat widget or funnel page setup</li>
        <li>Team member accounts and role setup</li>
        <li>Full platform training for your team</li>
      </ul>

      <h2>Why GoHighLevel Is the #1 CRM for Service Businesses</h2>
      <p>
        GoHighLevel replaces 6–8 separate tools:
      </p>
      <ul>
        <li>CRM → replaces HubSpot, Salesforce, Pipedrive</li>
        <li>Email marketing → replaces Mailchimp, ActiveCampaign</li>
        <li>SMS marketing → replaces Twilio, SimpleTexting</li>
        <li>Appointment booking → replaces Calendly, Acuity</li>
        <li>Funnel builder → replaces ClickFunnels</li>
        <li>Reputation management → replaces Birdeye, Podium</li>
        <li>Reporting → replaces multiple analytics tools</li>
      </ul>
      <p>
        The total cost of those individual tools: $800–$1,500/month. GoHighLevel: $97–$297/month.
        Plus a one-time ZROXZ setup fee to get it all working from day one.
      </p>

      <h2>GoHighLevel for Specific Industries</h2>
      <p>
        We have specialized GHL setups for:
      </p>
      <ul>
        <li>
          <strong>Real estate agents:</strong> Lead intake → text in 60 seconds → showing scheduler →
          pipeline through lead → contacted → showing → under contract → closed.{" "}
          <Link to="/blog/gohighlevel-for-real-estate">See the full setup →</Link>
        </li>
        <li>
          <strong>Dental clinics:</strong> New patient intake → appointment booking → reminder sequence →
          post-appointment review request → reactivation at 6 months.{" "}
          <Link to="/blog/ai-automation-for-dental-clinics">See the dental clinic setup →</Link>
        </li>
        <li>
          <strong>Law firms and consultants:</strong> Lead intake → qualification sequence →
          consultation booking → contract sent → follow-up.
        </li>
        <li>
          <strong>Home services:</strong> Quote request → instant response → job scheduled →
          technician assigned → post-job review request.
        </li>
      </ul>

      <h2>Our 7-Day GHL Setup Process</h2>
      <ol>
        <li><strong>Day 1:</strong> Discovery call — map your sales process, lead sources, and team</li>
        <li><strong>Day 2:</strong> Account setup, pipeline creation, and contact import</li>
        <li><strong>Day 3–4:</strong> Build all automation workflows and sequences</li>
        <li><strong>Day 5:</strong> Calendar integration and booking configuration</li>
        <li><strong>Day 6:</strong> Website integration, forms, and tracking setup</li>
        <li><strong>Day 7:</strong> Team training, QA, and go-live</li>
      </ol>

      <p>
        Also read:{" "}
        <Link to="/blog/gohighlevel-automation-guide">GoHighLevel Automation Setup Guide for Small Businesses →</Link>
      </p>
    </ServicePageLayout>
  );
}
