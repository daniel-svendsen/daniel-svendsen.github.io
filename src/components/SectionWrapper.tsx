import React, {ReactNode} from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
}

const SectionWrapper = ({children, className = ''}: SectionWrapperProps) => {
    return (
        <section className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 ${className}`}>
            {children}
        </section>
    );
};

export default SectionWrapper;
