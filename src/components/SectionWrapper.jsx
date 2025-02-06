import React from 'react';

const SectionWrapper = ({ children, className = '' }) => {
    return (
        <section className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 ${className}`}>
            {children}
        </section>
    );
};

export default SectionWrapper;
