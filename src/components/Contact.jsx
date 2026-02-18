import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('enviando');
        setTimeout(() => {
            setStatus('sucesso');
            setFormData({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
        }, 1500);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Endereço",
            content: "Rua Jose Versolato, 111",
            subcontent: "Bloco B Sala 716-D - Centro – São Bernardo do Campo – SP, 09750-730",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Phone,
            title: "Telefone",
            content: "(11) 4837-4340",
            subcontent: "Atendimento comercial",
            color: "from-green-500 to-emerald-500",
            link: "tel:+551148374340"
        },
        {
            icon: Mail,
            title: "E-mail",
            content: "juridico@kainosco.com.br",
            subcontent: "Respondemos em até 24h",
            color: "from-purple-500 to-pink-500",
            link: "mailto:juridico@kainosco.com.br"
        },
    ];

    return (
        <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/50 to-transparent" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                        <MessageSquare size={16} />
                        Entre em Contato
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Vamos{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            conversar
                        </span>{' '}
                        sobre seu projeto
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Estamos prontos para atender sua empresa no Centro de São Paulo ou via atendimento remoto
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all"
                                        >
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shrink-0`}>
                                                <info.icon size={28} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                                                <p className="text-slate-700 font-medium">{info.content}</p>
                                                <p className="text-sm text-slate-500">{info.subcontent}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shrink-0`}>
                                                <info.icon size={28} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                                                <p className="text-slate-700 font-medium">{info.content}</p>
                                                <p className="text-sm text-slate-500">{info.subcontent}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* WhatsApp CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock size={20} className="text-blue-400" />
                                    <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Atendimento Rápido</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Fale diretamente com nossa diretoria
                                </h3>
                                <p className="text-slate-400 mb-6">
                                    Para propostas corporativas e atendimento personalizado
                                </p>
                                <motion.a
                                    href="tel:+551148374340"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
                                >
                                    <Phone size={20} />
                                    Ligar Agora
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicite uma Proposta</h3>
                            <p className="text-slate-600 mb-8">Preencha o formulário abaixo e retornaremos em breve</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                                        <input
                                            type="text"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            required
                                            placeholder="Seu nome"
                                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Empresa</label>
                                        <input
                                            type="text"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nome da empresa"
                                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">E-mail Corporativo</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="email@empresa.com"
                                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">WhatsApp/Telefone</label>
                                        <input
                                            type="tel"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleChange}
                                            required
                                            placeholder="(00) 00000-0000"
                                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Como podemos ajudar?</label>
                                    <textarea
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Descreva brevemente sua necessidade..."
                                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'enviando' || status === 'sucesso'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                                        status === 'sucesso'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                                    }`}
                                >
                                    {status === 'enviando' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : status === 'sucesso' ? (
                                        <>
                                            <CheckCircle2 size={20} />
                                            Mensagem Enviada!
                                        </>
                                    ) : (
                                        <>
                                            Solicitar Proposta Comercial
                                            <Send size={18} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
