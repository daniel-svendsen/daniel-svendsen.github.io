import React from 'react';

const TabPanel = ({ title, children }) => {
    return (
        <div className="p-4 min-h-[50px]">
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
            <div>{children}</div>
        </div>
    );
};

export default TabPanel;
