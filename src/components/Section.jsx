import React from 'react';

const Section = ({
    children,
    id,
    className = '',
    containerClassName = '',
    variant = 'white',
    title,
    subtitle,
    centered = false
}) => {
    const bgStyles = {
        white: 'bg-white',
        slate: 'bg-slate-50',
        dark: 'bg-slate-900 text-white',
        blue: 'bg-blue-600 text-white'
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${bgStyles[variant]} ${className}`}
        >
            <div className={`container mx-auto px-6 ${containerClassName}`}>
                {(title || subtitle) && (
                    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
                        {subtitle && (
                            <span className={`inline-block font-bold tracking-wider uppercase text-sm mb-3 ${variant === 'dark' || variant === 'blue' ? 'text-blue-300' : 'text-blue-600'}`}>
                                {subtitle}
                            </span>
                        )}
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                                {title}
                            </h2>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
