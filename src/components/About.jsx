import React from 'react';
import { motion } from 'framer-motion';
import { Building2, History, MapPin, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: TrendingUp, text: "Inovação desde 2023" },
        { icon: Shield, text: "Empresa ativa e transparente" },
        { icon: CheckCircle2, text: "CNPJ: 49.204.909/0001-50" },
    ];

    return (
        <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Section Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
                        >
                            <Building2 size={16} />
                            <span>Sobre Nossa Empresa</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
                        >
                            Inovação e{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                tecnologia
                            </span>{' '}
                            desde 2023
                        </motion.h2>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 mb-8"
                        >
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Fundada em São Bernardo do Campo em 16/01/2023, a <strong className="text-slate-900">Daha Out+Tech - Aw Negocios LTDA</strong> nasceu com a missão de revolucionar o teleatendimento e serviços tecnológicos. Com capital social de R$ 50.000,00 e sob a administração de Manoel Avelino Neto.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Como uma sociedade limitada ativa e transparente, nos consolidamos pela seriedade e compromisso com os resultados de nossos clientes. Nossa atuação é pautada na ética, na segurança jurídica e no uso estratégico de informações.
                            </p>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-3 mb-8"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <item.icon size={20} className="text-blue-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Mission & Vision Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                                    <History size={24} className="text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Missão</h3>
                                <p className="text-sm text-slate-600">
                                    Prover soluções eficientes que garantam a saúde financeira de nossos parceiros.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                                    <Building2 size={24} className="text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Visão</h3>
                                <p className="text-sm text-slate-600">
                                    Ser referência nacional em intermediação e recuperação de ativos corporativos.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                                alt="HDS Office"
                                className="w-full h-[500px] object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                            
                            {/* Location Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="absolute bottom-6 left-6 right-6"
                            >
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <MapPin size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white/70 text-sm">Sede Própria</div>
                                        <div className="text-white font-bold text-lg">São Paulo, SP</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, type: "spring" }}
                            className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100"
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                3+
                            </div>
                            <div className="text-slate-600 text-sm">Anos de atividade</div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -z-10 blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
