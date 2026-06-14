import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! Welcome to Novelty Works. How can I help you with our digital solutions today?",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our team will get back to you shortly regarding your inquiry.",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button - adjusted higher on mobile so it doesn't get covered */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-28 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#3B82F6] text-white rounded-full shadow-2xl cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:scale-105 md:bottom-6 ${
          isOpen ? 'rotate-90 scale-90 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Window - pushed higher on mobile viewports */}
      <div
        className={`fixed bottom-44 right-4 z-[9998] w-[92vw] md:bottom-20 md:right-6 md:w-96 h-[480px] max-h-[65vh] bg-[#0B132B] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#0B132B] border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#00D54B] rounded-full animate-pulse" />
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">Novelty Assistant</h3>
              <p className="text-gray-400 text-[10px]">Always online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Message Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0B132B]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[80%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#3B82F6] text-white rounded-br-none'
                    : 'bg-white/5 text-gray-200 rounded-bl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}
          {isTyping && (
            <div className="mr-auto flex items-center gap-1 bg-white/5 px-4 py-3 rounded-2xl rounded-bl-none border border-white/5">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="p-4 bg-[#0B132B] border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
<button
            type="submit"
            className="bg-[#3B82F6] text-white p-3 rounded-xl hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.941 60.513 60.513 0 0018.454-10.5.75.75 0 000-1.565 60.513 60.513 0 00-18.454-10.5z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};