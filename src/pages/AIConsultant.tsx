import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { brands, getAllModels } from '@/data/cars';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const suggestions = [
  "What's the best sports car under €100,000?",
  "Compare Tesla Model S Plaid vs Porsche Taycan Turbo S",
  "Recommend a family-friendly luxury SUV",
  "Which electric cars have the longest range?",
];

const AIConsultant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Welcome to LuxeDrive AI Consultant! 🚗✨\n\nI'm your expert automotive advisor with knowledge of ${brands.length} premium brands and ${getAllModels().length}+ models. I can help you:\n\n• Find the perfect car for your needs\n• Compare different models\n• Explain technical specifications\n• Recommend based on budget, style, or performance\n\nWhat would you like to know?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `Based on your interest in "${text}", I'd recommend exploring our Süper Spor category. The Porsche 911 Turbo S offers an incredible balance of daily usability and track performance with 650 HP and 0-100 km/h in just 2.7 seconds.`,
        `Great question! For that criteria, consider the Ferrari 296 GTB - it combines a V6 turbo with hybrid technology for 830 HP total. It's both exhilarating to drive and surprisingly efficient for a supercar.`,
        `I understand you're looking for something special. The McLaren Artura might be perfect - it's their newest hybrid supercar with 680 HP, beautiful design, and cutting-edge technology.`,
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background noise flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-8 flex flex-col">
        <div className="container-luxe flex-1 flex flex-col max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <h1 className="text-title">AI Consultant</h1>
          </motion.div>

          {/* Messages */}
          <div className="flex-1 glass rounded-3xl p-6 mb-6 overflow-y-auto max-h-[50vh]">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 mb-6 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    message.role === 'user' ? 'bg-primary text-primary-foreground' : 'glass'
                  }`}>
                    {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                  }`}>
                    <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-secondary p-4 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="text-xs px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about cars..."
              className="w-full px-6 py-4 pr-14 bg-secondary rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 transition-opacity"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIConsultant;
