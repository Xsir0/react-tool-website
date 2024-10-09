import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Languages, 
  Mic, 
  FileText, 
  MessageSquare, 
  Image as ImageIcon
} from "lucide-react";

const tools = [
  { name: "Text Translation", icon: Languages, href: "/translation" },
  { name: "Audio Transcription", icon: Mic, href: "/transcription" },
  { name: "Text Extraction", icon: FileText, href: "/extraction" },
  { name: "AI Chat", icon: MessageSquare, href: "/chat" },
  { name: "Image Processing", icon: ImageIcon, href: "/image-processing" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI Tools Hub</h1>
        <p className="text-xl text-center mb-12">Experience the power of AI with our suite of tools</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card key={tool.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <tool.icon className="h-12 w-12 mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
                <p className="mb-4 text-muted-foreground">Try our {tool.name.toLowerCase()} tool</p>
                <Button asChild>
                  <Link href={tool.href}>Get Started</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2023 AI Tools Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}