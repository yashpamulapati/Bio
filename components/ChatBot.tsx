import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { PROFILE } from '../constants';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Yash's AI assistant. Ask me anything about his experience or research." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Gemini
  useEffect(() => {
    if (isOpen && !chatSessionRef.current && process.env.API_KEY) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: PROFILE.systemInstruction,
          },
        });
      } catch (error) {
        console.error("Failed to initialize Gemini:", error);
      }
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatSessionRef.current || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); // Add placeholder

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullResponse += text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullResponse;
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] bg-white rounded-lg shadow-xl border border-neutral-200 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-neutral-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <h3 className="font-medium text-sm">Ask AI about Yash</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-4 bg-neutral-50 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-neutral-800 text-white rounded-br-none' 
                      : 'bg-white border border-neutral-200 text-neutral-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-neutral-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-neutral-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my experience..."
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all text-neutral-800"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen 
            ? 'bg-neutral-100 text-neutral-600 rotate-90' 
            : 'bg-neutral-900 text-white hover:bg-neutral-800'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatBot;