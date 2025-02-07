// src/data/tabsData.tsx
import Timeline from '../components/TimeLine';
import React from 'react';
import {TabsDataItem} from "@/components/CvTabs";

const getTabsData = (content: any, timelineEvents: any[]): TabsDataItem[] => {
    return [
        {
            label: 'Profil & Kompetenser',
            title: content.skills.title,
            content: (
                <div className="text-xs sm:text-sm">
                    {content.skills.content.map((item: any, index: number) =>
                        typeof item === 'string' ? (
                            <p key={index} className="mb-2">{item}</p>
                        ) : (
                            <p key={index} className="mb-1">
                                <strong>{item.name}:</strong> {item.details}
                            </p>
                        )
                    )}
                </div>
            ),
        },
        {
            label: 'Erfarenheter',
            title: content.experience.title,
            content: <Timeline events={timelineEvents} />,
        },
        {
            label: 'Språk & Övrigt',
            title: content.languages.title,
            content: (
                <ul className="space-y-1 text-xs sm:text-sm">
                    {content.languages.content.map((item: any, index: number) => (
                        <li key={index}><strong>{item.name}:</strong> {item.level}</li>
                    ))}
                </ul>
            ),
        },
        {
            label: 'Fritidsintressen',
            title: content.hobbies.title,
            content: <p className="text-xs sm:text-sm">{content.hobbies.content}</p>,
        },
        {
            label: 'Kontakt',
            title: content.contact.title,
            content: (
                <ul className="space-y-1 text-xs sm:text-sm">
                    {content.contact.content.map((item: any, index: number) => (
                        <li key={index}><strong>{item.type}:</strong> {item.details}</li>
                    ))}
                </ul>
            ),
        },
    ];
};

export default getTabsData;
