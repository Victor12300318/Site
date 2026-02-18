import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/5511974378752"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contato via WhatsApp"
        >
            {/* Pulse Animation Ring */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-10" />
            
            {/* Main Button */}
            <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-shadow">
                <MessageCircle size={32} className="drop-shadow-md" />
            </div>

            {/* Tooltip */}
            <motion.span
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-slate-100"
            >
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Fale Conosco agora!
                </span>
                {/* Arrow */}
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white border-t border-r border-slate-100 rotate-45" />
            </motion.span>
        </motion.a>
    );
};

export default WhatsAppButton;
