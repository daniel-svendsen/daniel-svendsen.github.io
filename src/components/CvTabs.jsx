// src/components/CVTabs.jsx
import React from 'react';
import { Tab } from '@headlessui/react';
import TabPanel from './TabPanel';

const CVTabs = ({ tabsData }) => {
    return (
        <Tab.Group>
            <Tab.List className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 border-indigo-200 pb-2 mb-4">
                {tabsData.map((tab, index) => (
                    <Tab
                        key={index}
                        className={({ selected }) =>
                            `px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-300 focus:outline-none ${
                                selected
                                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                                    : 'text-gray-600 hover:text-indigo-600'
                            }`
                        }
                    >
                        {tab.label}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                {tabsData.map((tab, index) => (
                    <Tab.Panel key={index}>
                        <TabPanel title={tab.title}>{tab.content}</TabPanel>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default CVTabs;
