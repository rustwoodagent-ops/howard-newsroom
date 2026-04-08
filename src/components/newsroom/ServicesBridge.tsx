import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Bot, Workflow, Lightbulb, ArrowRight } from "lucide-react";
import { servicesOfferings } from "@/data/briefings";
import { EditorialImage } from "@/components/shared/EditorialImage";

const iconMap = {
  Bot,
  Workflow,
  Lightbulb,
};

export function ServicesBridge() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200 py-12 md:py-14">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center mb-8">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/assets/bridge/hd-agents-bridge.jpg"
              alt="HD Agents bridge visual."
              aspectRatio="video"
              className="border border-neutral-200"
              sizes="(min-width: 1024px) 34vw, 100vw"
              placeholderText="HD Agents bridge visual"
              placeholderLabel="Bridge image pending final asset pack"
            />
          </div>
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="eyebrow mb-2">HD Agents</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Ready to move from signal to implementation?
            </h2>
            <p className="mt-3 text-neutral-600 max-w-2xl lg:max-w-none">
              Howard Newsroom is published by HD Agents. We help teams operationalize what
              this publication covers: agent systems, automation reliability, and practical AI
              operating models.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicesOfferings.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Lightbulb;

            return (
            <div
              key={service.id}
              className="bg-white border border-neutral-200 p-5 hover:border-neutral-300 transition-colors"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-neutral-100 text-neutral-700 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
