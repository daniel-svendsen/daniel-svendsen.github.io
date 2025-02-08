import React, {ReactNode} from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
}

const SectionWrapper = ({title, children, className = ""}) => (
    <section className={`p-6 ${className}`} aria-label={title}>
        {title && <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>}
        {children}
    </section>
);
export default SectionWrapper;
