import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <Container size="narrow" className="text-center py-16">
        <span className="text-6xl font-bold text-neutral-200">404</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900">Page Not Found</h1>
        <p className="mt-2 text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
