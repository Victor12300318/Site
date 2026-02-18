import React from 'react';
import { motion } from 'framer-motion';
import { 
    ShieldAlert, 
    CreditCard, 
    FileSearch, 
    Headset, 
    Handshake,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: ShieldAlert,
            title: "Recuperação de Crédito",
            description: "Cobrança especializada para ativos inadimplentes, utilizando abordagens persuasivas e técnicas avançadas de negociação.",
            color: "from-red-500 to-rose-500",
            bgColor: "bg-red-500/10",
            features: ["Negociação especializada", "Recuperação judicial", "Acordos personalizados"]
        },
        {
            icon: CreditCard,
            title: "Cobrança Administrativa",
            description: "Gestão completa de contas a receber, reduzindo a inadimplência e preservando o relacionamento com o cliente.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
            features: ["Gestão de inadimplentes", "Notificações automatizadas", "Relatórios detalhados"]
        },
        {
            icon: FileSearch,
            title: "Informações Cadastrais",
            description: "Análise profunda e validação de dados para suporte em decisões de crédito e identificação de devedores.",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-500/10",
            features: ["Consulta CPF/CNPJ", "Análise de risco", "Localização de devedores"]
        },
        {
            icon: Headset,
            title: "Teleatendimento",
            description: "Equipe profissional para suporte, atendimento e prospecção, garantindo qualidade em cada interação telefônica.",
            color: "from-emerald-500 to-green-500",
            bgColor: "bg-emerald-500/10",
            features: ["Atendimento 24/7", "Call center especializado", "Scripts personalizados"]
        },
        {
            icon: Handshake,
            title: "Intermediação de Serviços",
            description: "Agenciamento estratégico para novos negócios e conexão entre empresas com foco em expansão comercial.",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10",
            features: ["Conexão B2B", "Prospectação ativa", "Fechar parcerias"]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
        <section id="services" className="relative py-24 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
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
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-4">
                        <Sparkles size={16} />
                        Nossas Soluções
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Serviços que{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            impulsionam
                        </span>{' '}
                        seu negócio
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Oferecemos soluções completas e personalizadas para atender às necessidades específicas da sua empresa
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:border-white/20">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                {/* Icon */}
                                <div className={`relative w-16 h-16 rounded-2xl ${service.bgColor} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl`} />
                                    <service.icon size={32} className="relative z-10 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                <div className="flex items-center gap-2 text-blue-400 font-medium text-sm group-hover:gap-3 transition-all">
                                    <span>Saiba mais</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="group relative"
                    >
                        <div className="relative h-full rounded-2xl overflow-hidden">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
                            
                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                                    <Sparkles size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Solução Customizada?
                                </h3>
                                <p className="text-white/80 mb-8 leading-relaxed">
                                    Entendemos a necessidade específica do seu negócio para criar um plano sob medida.
                                </p>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Solicitar Orçamento
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
