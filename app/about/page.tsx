import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <Card className="p-6">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="mb-4">
          We are a team dedicated to creating amazing web applications using
          cutting-edge technologies like Next.js and shadcn/ui.
        </p>
      </Card>
    </main>
  );
}