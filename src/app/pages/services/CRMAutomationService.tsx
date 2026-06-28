import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";

const faqs = [
  {
    question: "Is GoHighLevel worth it for small businesses?",
    answer:
      "Yes — for most service businesses, GoHighLevel replaces 4–6 separate tools (CRM, email marketing, appointment booking, SMS, pipeline management) at a fraction of the combined cost. The key is having it set up correctly from the start, which is where ZROXZ comes in.",
  },
  {
    question: "How long does GoHighLevel setup take?",
    answer:
      "ZROXZ completes a full GoHighLevel setup — pipelines, automations, integrations, and training — in 7–14 days depending on complexity.",
  },
  {
    question: "Can I replace my existing CRM with GoHighLevel?",
    answer:
      "In most cases, yes. GoHighLevel includes contact management, pipeline tracking, email and SMS automation, appointment scheduling, and reporting. We help migrate your existing contacts and data during the setup process.",
  },
  {
    question: "What is n8n and how does it connect to my CRM?",
    answer:
      "n8n is a self-hosted workflow automation tool that connects your apps together. We use n8n to build custom automations that GoHighLevel can't handle natively — like connecting to external APIs, custom data processing, or complex multi-step workflows.",
  },
  {
    question: "Do you provide ongoing support after setup?",
    answer:
      "Yes. We offer monthly retainer packages for clients who want ongoing automation work, new workflow builds, and support. Ask about our monthly plans during your free call.",
  },
];

export function CRMAutomationService() {
  return (
    <ServicePageLayout
      title="CRM Automation Agency — GoHighLevel & n8n for US Businesses"
      h1="CRM Automation Agency — GoHighLevel & n8n for US Businesses"
      metaDescription="ZROXZ sets up and automates GoHighLevel CRMs and n8n workflows for US service businesses. Full pipeline setup, lead follow-up automation, and appointment booking — done in 7 days."
      canonicalUrl="https://zroxz.com/services/crm-automation"
      keywords="GoHighLevel automation, CRM automation agency, n8n automation, CRM setup for small business, GoHighLevel setup"
      category="CRM Automation"
      faqs={faqs}
      pricing={{ price: "$800", label: "Basic CRM setup · Full automation packages from $1,500" }}
    >
      <p>
        Most small businesses are sitting on a goldmine of leads they never follow up with. Leads go cold because
        nobody sends the second email. Appointments get missed because there's no reminder sequence. Deals die in
        the pipeline because there's no automated nudge. <strong>ZROXZ fixes all of this</strong> by setting up
        and automating your entire CRM — using GoHighLevel, n8n, or both — so your pipeline runs on autopilot.
      </p>

      <h2>What We Build for You</h2>
      <ul>
        <li>Full GoHighLevel account setup and configuration</li>
        <li>Lead pipeline with stage-based automations</li>
        <li>Missed call text-back automation (instant SMS when you miss a call)</li>
        <li>Appointment booking with automated reminder sequences (24h, 1h, 10min)</li>
        <li>Lead follow-up email and SMS sequences</li>
        <li>Review request automation after service delivery</li>
        <li>Reactivation campaigns for cold leads</li>
        <li>n8n workflows for custom integrations and complex logic</li>
      </ul>

      <h2>The 5 Automations Every Business Should Have</h2>
      <p>
        In our experience setting up CRM automation for dozens of US service businesses, these five automations
        deliver the fastest and most measurable ROI:
      </p>
      <ol>
        <li>
          <strong>Missed call text-back:</strong> When someone calls and you don't answer, they instantly receive
          a text: "Hey, sorry I missed you! I'm with a client right now. Want to book a quick call? [link]"
        </li>
        <li>
          <strong>Lead follow-up sequence:</strong> New lead comes in → immediate email → 24h SMS → 72h email →
          7-day call. Most businesses only do step 1. We automate all five.
        </li>
        <li>
          <strong>Appointment reminders:</strong> Confirmed booking → reminder at 24 hours → reminder at 1 hour →
          "I'm on my way" text 10 minutes before. Reduces no-shows by 40–60%.
        </li>
        <li>
          <strong>Review requests:</strong> After a service is marked complete, the system sends a personalized
          review request via SMS and email at the optimal time for response.
        </li>
        <li>
          <strong>Reactivation campaign:</strong> Every 90 days, cold leads get a personalized re-engagement
          sequence. Most businesses are sitting on 6 months of leads they've never tried again.
        </li>
      </ol>

      <h2>GoHighLevel vs. Other CRMs</h2>
      <p>
        GoHighLevel is the best all-in-one CRM for US service businesses because it combines CRM, email marketing,
        SMS, funnel builder, appointment scheduling, and automation in one platform. Compare that to paying for
        HubSpot ($800/month), Mailchimp ($150/month), Calendly ($20/month), and a separate SMS tool — GoHighLevel
        does all of it for $97–$297/month. We handle the entire setup so you get it right from day one.
      </p>

      <p>
        For more complex automations, we layer in <strong>n8n</strong> — a self-hosted workflow automation tool
        that gives us unlimited flexibility.{" "}
        <Link to="/services/n8n-workflows">Learn more about our n8n workflow service →</Link>
      </p>

      <h2>Who This Is For</h2>
      <ul>
        <li>Service businesses with a consistent lead flow they're not following up with effectively</li>
        <li>Businesses currently using spreadsheets or basic CRMs to manage contacts</li>
        <li>Agencies and consultants who want to automate their client delivery pipeline</li>
        <li>Real estate agents, dental clinics, law firms, and other appointment-based businesses</li>
      </ul>

      <p>
        See how this works for specific industries:{" "}
        <Link to="/blog/gohighlevel-for-real-estate">GoHighLevel for Real Estate →</Link> ·{" "}
        <Link to="/blog/ai-automation-for-dental-clinics">AI Automation for Dental Clinics →</Link>
      </p>

      <h2>Our Process</h2>
      <ol>
        <li><strong>Audit (Day 1):</strong> Map your current lead flow and identify automation gaps</li>
        <li><strong>Setup (Day 2–5):</strong> Configure GHL account, pipelines, and contact settings</li>
        <li><strong>Automation build (Day 6–10):</strong> Build all automation workflows and sequences</li>
        <li><strong>Integration (Day 11–12):</strong> Connect your lead sources, calendar, and website</li>
        <li><strong>Training + launch (Day 13–14):</strong> Train your team and go live</li>
      </ol>
    </ServicePageLayout>
  );
}
