import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Award, Users, ArrowUpRight } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Target,
            title: "Foco em Resultados",
            description: "Metodologia personalizada para maximizar a recuperação de créditos pendentes com eficiência comprovada.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: Zap,
            title: "Agilidade",
            description: "Processos automatizados e equipe qualificada para retornos rápidos e precisos em todas as etapas.",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-500/10",
        },
        {
            icon: Award,
            title: "Experiência",
            description: "Atuando no mercado de São Paulo desde 2017 com total excelência, ética e profissionalismo.",
            color: "from-emerald-500 to-green-500",
            bgColor: "bg-emerald-500/10",
        },
        {
            icon: Users,
            title: "Parceria Estratégica",
            description: "Mais do que prestadores de serviço, somos o braço direito da sua empresa no crescimento.",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />
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
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-4">
                        Por que nos escolher
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Diferenciais que{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            impulsionam
                        </span>{' '}
                        seu negócio
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Combinamos tecnologia, experiência e comprometimento para entregar resultados excepcionais
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                {/* Icon */}
                                <div className={`relative w-16 h-16 rounded-2xl ${feature.bgColor} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon size={32} className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ color: 'inherit' }} />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl`} />
                                    <feature.icon size={32} className="relative z-10 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    {feature.description}
                                </p>

                                {/* Link */}
                                <div className="flex items-center gap-2 text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Saiba mais</span>
                                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
