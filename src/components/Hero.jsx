import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Award, Sparkles } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                            <Sparkles size={16} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-100">Especialistas em Recuperação de Crédito</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
                        >
                            Recuperamos seu{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Patrimônio
                            </span>{' '}
                            com Eficiência
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
                        >
                            Desde 2023, a Daha Out+Tech oferece soluções inovadoras em teleatendimento, 
                            tecnologia e negócios em São Bernardo do Campo.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                            >
                                Solicite uma Proposta
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all"
                            >
                                Nossos Serviços
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                    <TrendingUp size={28} className="text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">98%</div>
                                    <div className="text-sm text-slate-400">Taxa de Sucesso</div>
                                </div>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden sm:block" />
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center">
                                    <Award size={28} className="text-green-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">7+</div>
                                    <div className="text-sm text-slate-400">Anos de Experiência</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hidden lg:block relative"
                    >
                        {/* Main Card */}
                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <Shield size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Painel de Controle</h3>
                                    <p className="text-sm text-slate-400">Recuperação em Tempo Real</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-800/50 rounded-2xl p-5 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">R$ 2.5M</div>
                                    <div className="text-sm text-slate-400">Recuperado</div>
                                    <div className="mt-3 flex items-center gap-1 text-green-400 text-sm">
                                        <TrendingUp size={16} />
                                        <span>+23% este mês</span>
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-2xl p-5 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">156</div>
                                    <div className="text-sm text-slate-400">Clientes Ativos</div>
                                    <div className="mt-3 flex items-center gap-1 text-green-400 text-sm">
                                        <TrendingUp size={16} />
                                        <span>+12 novos</span>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bars */}
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-400">Taxa de Recuperação</span>
                                        <span className="text-white font-semibold">98%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '98%' }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-400">Satisfação do Cliente</span>
                                        <span className="text-white font-semibold">96%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '96%' }}
                                            transition={{ duration: 1.5, delay: 1.2 }}
                                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                             <motion.a
                                href="tel:+551148374340"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                            >
                                Falar com Consultor
                            </motion.a>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-full"
                        />
                        <motion.div
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute -bottom-5 -left-5 w-24 h-24 border border-blue-500/20 rounded-full"
                        />
                    </motion.div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
