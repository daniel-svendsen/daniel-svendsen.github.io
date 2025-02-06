export const getTimelineEvents = (content) => {
    const extractYear = (dateString) => {
        const match = dateString.match(/\d{4}/);
        return match ? parseInt(match[0], 10) : 0;
    };

    return [
        ...content.experience.content.education.map(item => ({
            title: "Utbildning",
            date: item.year,
            description: item.details,
        })),
        ...content.experience.content.work.map(item => ({
            title: "Arbetslivserfarenhet",
            date: item.year,
            description: item.details,
            link: item.link,
        })),
    ].sort((a, b) => extractYear(b.date) - extractYear(a.date));
};
