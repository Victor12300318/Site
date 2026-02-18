import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navegacao: [
            { name: 'Início', href: '#home' },
            { name: 'Sobre Nós', href: '#about' },
            { name: 'Serviços', href: '#services' },
            { name: 'Contato', href: '#contact' },
        ],
        servicos: [
            { name: 'Recuperação de Crédito', href: '#services' },
            { name: 'Cobrança Administrativa', href: '#services' },
            { name: 'Informações Cadastrais', href: '#services' },
            { name: 'Teleatendimento', href: '#services' },
        ],
        legal: [
            { name: 'Privacidade', href: '#' },
            { name: 'Termos de Uso', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="relative bg-slate-950 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 border-b border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-4">
                            <motion.a
                                href="#home"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 mb-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">D</span>
                                </div>
                                <div>
                                    <span className="text-xl font-bold text-white">Daha</span>
                                    <span className="text-white/60 text-xs tracking-widest block">OUT+TECH</span>
                                </div>
                            </motion.a>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                                Soluções inovadoras em teleatendimento, tecnologia e negócios desde 2023. Transformando a experiência do cliente com excelência.
                            </p>
                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-semibold mb-4">Navegação</h4>
                            <ul className="space-y-3">
                                {footerLinks.navegacao.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="lg:col-span-3">
                            <h4 className="text-white font-semibold mb-4">Serviços</h4>
                            <ul className="space-y-3">
                                {footerLinks.servicos.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-3">
                            <h4 className="text-white font-semibold mb-4">Contato</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="https://maps.google.com/?q=Rua+Jose+Versolato+111+São+Bernardo+do+Campo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
                                    >
                                        <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                        <span className="group-hover:text-white transition-colors">
                                            Rua Jose Versolato, 111<br />
                                            Bloco B Sala 716 - D<br />
                                            Centro – São Bernardo do Campo – SP<br />
                                            09750-730
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+551148374340"
                                        className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        <Phone size={18} className="text-green-500 shrink-0" />
                                        <span>(11) 4837-4340</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:juridico@kainosco.com.br"
                                        className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        <Mail size={18} className="text-purple-500 shrink-0" />
                                        <span>juridico@kainosco.com.br</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-slate-500">
                        <span>&copy; {currentYear} Aw Negocios LTDA - Daha Out+Tech</span>
                        <span className="hidden md:block">•</span>
                        <span>CNPJ: 49.204.909/0001-50</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                        {footerLinks.legal.map((link, index) => (
                            <React.Fragment key={index}>
                                <a href={link.href} className="hover:text-white transition-colors">
                                    {link.name}
                                </a>
                                {index < footerLinks.legal.length - 1 && <span>•</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Made with love */}
                <div className="pb-6 text-center">
                    <p className="text-xs text-slate-600 flex items-center justify-center gap-1">
                        Feito com <Heart size={12} className="text-red-500 fill-red-500" /> em São Paulo
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
