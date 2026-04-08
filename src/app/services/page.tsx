import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/shared/Button";
import { Bot, Workflow, Lightbulb, Code, Users } from "lucide-react";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Services",
  description: "AI implementation, workflow automation, and strategic consulting from HD Agents.",
  path: "/services",
});

const services = [
  {
    id: "agents",
    title: "Agent Implementation",
    description:
      "Deploy bounded-autonomy agent systems mapped to real workflows, with human handoff, auditability, and measurable outcomes.",
    icon: Bot,
    features: [
      "Custom agent architecture design",
      "Multi-agent orchestration",
      "Integration with existing systems",
      "Monitoring and optimization",
    ],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description:
      "Connect critical systems and automate repetitive flows with resilient orchestration, monitoring, and controlled exception handling.",
    icon: Workflow,
    features: [
      "Process analysis and mapping",
      "n8n, Make, and custom solutions",
      "API integrations",
      "Error handling and recovery",
    ],
  },
  {
    id: "consulting",
    title: "AI Consulting",
    description:
      "Design practical AI operating models across tooling, governance, team capability, and delivery sequencing.",
    icon: Lightbulb,
    features: [
      "AI readiness assessment",
      "Use case identification",
      "Vendor evaluation",
      "Implementation roadmap",
    ],
  },
  {
    id: "development",
    title: "Custom Development",
    description:
      "Build AI-powered internal products and tools from scoped pilot to production-grade implementation.",
    icon: Code,
    features: [
      "AI feature integration",
      "Custom tool development",
      "API design and implementation",
      "Testing and deployment",
    ],
  },
  {
    id: "training",
    title: "Team Training",
    description:
      "Upskill technical and non-technical teams with practical AI training grounded in your stack and operating context.",
    icon: Users,
    features: [
      "Prompt engineering workshops",
      "Tool-specific training",
      "Best practices and patterns",
      "Ongoing support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section background="white" className="border-b border-neutral-200" rhythm="spacious">
        <Container size="narrow">
          <span className="eyebrow">
            HD Agents
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-neutral-900">
            Services
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            We help teams move from AI intent to production outcomes across agent systems,
            workflow automation, and operating-model design.
          </p>
        </Container>
      </Section>

      {/* Services List */}
      <Section background="white">
        <Container size="narrow">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-neutral-100 text-neutral-700">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">{service.title}</h2>
                    <p className="mt-2 text-neutral-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < services.length - 1 && (
                  <hr className="mt-16 border-neutral-200" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="cream">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Ready to get started?</h2>
          <p className="mt-3 text-neutral-600">
            Start with an implementation-focused discovery call. No deck theater, just concrete next steps.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="mailto:hello@hdagents.com" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
