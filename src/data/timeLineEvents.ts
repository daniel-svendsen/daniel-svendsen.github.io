export interface TimelineEvent {
    title: string;
    date: string;
    description: string;
    link?: { text: string; href: string };
}

export const getTimelineEvents = (content: any): TimelineEvent[] => {
    const extractYear = (dateString: string): number => {
        const match = dateString.match(/\d{4}/);
        return match ? parseInt(match[0], 10) : 0;
    };

    return [
        ...content.experience.content.education.map((item: any) => ({
            title: "Utbildning",
            date: item.year,
            description: item.details,
        })),
        ...content.experience.content.work.map((item: any) => ({
            title: "Arbetslivserfarenhet",
            date: item.year,
            description: item.details,
            link: item.link,
        })),
    ].sort((a, b) => extractYear(b.date) - extractYear(a.date));
};
