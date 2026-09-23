import Marquee from "./Marquee";

const tools = [
  "n8n",
  "Make",
  "Zapier",
  "OpenAI",
  "Claude",
  "Airtable",
  "Notion",
  "Slack",
  "Google Sheets",
  "WhatsApp Business",
  "HubSpot",
  "Twilio",
];

export default function ToolMarquee() {
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-8">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Built with tools you already trust
      </p>
      <Marquee duration="40s" gap="4rem">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-base font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {tool}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
