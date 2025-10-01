import { Zap } from "lucide-react";

const llms = [
  { name: "ChatGPT", gradient: "from-green-400 to-green-600" },
  { name: "Claude", gradient: "from-orange-400 to-red-600" },
  { name: "Perplexity", gradient: "from-blue-400 to-cyan-600" },
  { name: "Gemini", gradient: "from-purple-400 to-pink-600" },
  { name: "DeepSeek", gradient: "from-indigo-400 to-blue-600" },
];

export function LLMLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-12">
      {llms.map((llm, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors"
          data-testid={`llm-${index}`}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-br ${llm.gradient} rounded-2xl flex items-center justify-center`}
          >
            <Zap className="w-10 h-10 text-white" />
          </div>
          <span className="font-medium text-sm">{llm.name}</span>
        </div>
      ))}
    </div>
  );
}
