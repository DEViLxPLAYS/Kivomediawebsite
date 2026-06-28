import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";

const faqs = [
  {
    question: "Is n8n free to use?",
    answer:
      "n8n has a free self-hosted version with unlimited workflows and executions. The cloud version starts at $20/month. ZROXZ typically deploys self-hosted n8n on a VPS for clients, which costs $5–$20/month to run — significantly cheaper than Zapier or Make at scale.",
  },
  {
    question: "How is n8n different from Zapier?",
    answer:
      "n8n is self-hosted, open-source, and has no per-task pricing — making it dramatically cheaper for high-volume automations. It also supports more complex logic (branching, loops, code nodes) than Zapier. The trade-off is it requires more technical expertise to set up, which is why clients hire ZROXZ.",
  },
  {
    question: "What can n8n integrate with?",
    answer:
      "n8n has 350+ native integrations including GoHighLevel, HubSpot, Slack, Gmail, Google Sheets, Airtable, Notion, Stripe, Shopify, WhatsApp, Twilio, OpenAI, and more. If a tool has an API, n8n can connect to it.",
  },
  {
    question: "How long does it take to build an n8n workflow?",
    answer:
      "Simple workflows (single trigger, 3–5 actions) take 1–3 days. Complex multi-step workflows with branching logic, error handling, and multiple integrations take 5–10 days. ZROXZ includes testing and documentation for every workflow delivered.",
  },
  {
    question: "Do I need technical knowledge to maintain n8n workflows after you build them?",
    answer:
      "No. We document every workflow clearly and train you or your team on how to monitor it and make minor updates. For ongoing changes and new workflow builds, we offer monthly retainer packages.",
  },
];

export function N8nWorkflowsService() {
  return (
    <ServicePageLayout
      title="n8n Workflow Automation — Custom Workflows Built for Your Business"
      h1="n8n Workflow Automation — Custom Workflows Built for Your Business"
      metaDescription="ZROXZ builds custom n8n automation workflows that connect your tools, eliminate manual work, and run 24/7. Self-hosted, unlimited executions, zero per-task fees."
      canonicalUrl="https://zroxz.com/services/n8n-workflows"
      keywords="n8n automation, n8n workflow, n8n developer, n8n agency, workflow automation for small business, n8n vs zapier"
      category="n8n Automation"
      faqs={faqs}
      pricing={{ price: "$300", label: "Per workflow · Packages from $800 · Book for custom quote" }}
    >
      <p>
        Every hour your team spends copying data between tools, manually sending follow-up emails, or entering
        information into spreadsheets is an hour that could be automated. ZROXZ builds{" "}
        <strong>custom n8n workflows</strong> that connect your entire tech stack — eliminating manual work and
        keeping your business running even when you're not at your desk.
      </p>

      <h2>What Is n8n?</h2>
      <p>
        n8n is an open-source workflow automation platform — similar to Zapier or Make, but self-hosted and without
        per-task pricing. For businesses running hundreds of automations per month, this translates to massive cost
        savings. A workflow that would cost $200/month on Zapier costs under $20/month to run on n8n.
      </p>
      <p>
        <Link to="/blog/n8n-vs-zapier-vs-make">See our full comparison: n8n vs. Zapier vs. Make →</Link>
      </p>

      <h2>Workflows We Build Most Often</h2>
      <ul>
        <li>
          <strong>Lead capture automation:</strong> Form submission → CRM entry → instant email + SMS notification
          → lead follow-up sequence triggered
        </li>
        <li>
          <strong>Missed call text-back:</strong> Missed call detected → immediate SMS sent to caller with
          booking link → response tracked in CRM
        </li>
        <li>
          <strong>AI chatbot backend:</strong> Chatbot conversation ends → lead data extracted → sent to CRM →
          follow-up email triggered → salesperson notified
        </li>
        <li>
          <strong>Review request automation:</strong> Job marked complete in CRM → 2-hour delay → personalized
          review request SMS + email sent
        </li>
        <li>
          <strong>Invoice and payment automation:</strong> Invoice created → sent via email → unpaid reminder
          at 7 days → late notice at 14 days → escalation at 30 days
        </li>
        <li>
          <strong>Social media monitoring:</strong> Keyword mentioned on Instagram/Reddit → instant Slack
          notification → response template suggested
        </li>
        <li>
          <strong>Data sync workflows:</strong> Keep two CRMs, spreadsheets, or databases in sync automatically
        </li>
        <li>
          <strong>Report generation:</strong> Weekly performance data pulled from multiple sources → formatted
          → sent as email report every Monday
        </li>
      </ul>

      <h2>Why Choose n8n Over Zapier?</h2>
      <ul>
        <li><strong>Cost:</strong> n8n self-hosted = $5–$20/month vs. Zapier = $50–$600/month for the same volume</li>
        <li><strong>Flexibility:</strong> n8n supports custom code nodes, complex branching, and loops</li>
        <li><strong>Privacy:</strong> Self-hosted means your data stays on your server</li>
        <li><strong>No limits:</strong> Unlimited workflows, unlimited executions — no task caps</li>
      </ul>

      <h2>Our n8n Workflow Delivery Process</h2>
      <ol>
        <li><strong>Scope call:</strong> Map the exact trigger, steps, conditions, and outputs for each workflow</li>
        <li><strong>Environment setup:</strong> Deploy your n8n instance if needed (VPS or your own server)</li>
        <li><strong>Workflow build:</strong> Build and test each workflow with real data</li>
        <li><strong>Integration testing:</strong> Test end-to-end with your live tools and credentials</li>
        <li><strong>Documentation + handoff:</strong> Full workflow documentation and team training</li>
      </ol>

      <p>
        See 5 specific n8n workflows that generate leads on autopilot:{" "}
        <Link to="/blog/n8n-workflow-for-lead-generation">Read the guide →</Link>
      </p>

      <h2>Integrations We Work With</h2>
      <ul>
        <li>GoHighLevel, HubSpot, Salesforce, Airtable</li>
        <li>Gmail, Outlook, SMTP</li>
        <li>Twilio, WhatsApp Business API</li>
        <li>Google Sheets, Notion, Slack</li>
        <li>OpenAI, Anthropic Claude</li>
        <li>Stripe, PayPal, QuickBooks</li>
        <li>Shopify, WooCommerce</li>
        <li>Any REST API or webhook-enabled tool</li>
      </ul>
    </ServicePageLayout>
  );
}
