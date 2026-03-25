export type TimelineItem = {
    year: number;
    position: string;
};

export type Club = {
    name: string;
    role: string;
    logo: string;
    timeline: TimelineItem[];
};


export const clubs: Club[] = [
    {
        name: "Hackathon Hub",
        role: "Volunteer Coordinator",
        logo: "/images/clubs/hackathon.jpg",
        timeline: [
            { year: 2024, position: "Member" },
            { year: 2025, position: "Faculty Coordinator" },
            { year: 2026, position: "Volunteer Coordinator" },
        ],
    },
    {
        name: "Association of Information Systems",
        role: "Vice Treasurer",
        logo: "/images/clubs/ais.jpg",
        timeline: [
            { year: 2024, position: "Executive Committee Member" },
            { year: 2025, position: "Vice Treasurer" },
            { year: 2026, position: "Await" },
        ],
    },
];