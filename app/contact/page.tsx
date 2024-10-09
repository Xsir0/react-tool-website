import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <Card className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          Get in touch with us at contact@example.com or call us at (123) 456-7890.
        </p>
      </Card>
    </main>
  );
}