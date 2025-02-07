const cvContent = {
    profile: {
        name: "Daniel Svendsén",
        description:
            "A dedicated and versatile individual with experience in both leadership and technical work, always striving to see the bigger picture.",
    },
    skills: {
        title: "Profile & Skills",
        content: [
            "I am a motivated and soon-to-be graduate full-stack/system developer with a mix of technical expertise and leadership experience. After 16 years in warehouse work and team leadership, I decided to pursue my passion and study system and full-stack development. I am passionate about building new things from scratch and creating solutions, contributing to strong, collaborative teams while maintaining a holistic perspective.",
            { name: "Operating Systems", details: "Windows, WSL" },
            { name: "Programming Languages", details: "Java, JavaScript, TypeScript, HTML/CSS" },
            { name: "Tools", details: "Spring Boot, JUnit, IntelliJ, Docker, Jenkins, Bash, Git, Maven, Gradle, Vue, Vite, React, VSCode" },
            { name: "Databases", details: "SQL, MySQL, MongoDB, SQL Server, SQLite" },
            { name: "Work Methodologies", details: "Agile methodologies, Scrum, Kanban" },
        ],
    },
    experience: {
        title: "Experience",
        content: {
            education: [
                { year: "2023 – Present", details: "Java Enterprise Developer, Yrgo, City of Gothenburg, 400 YH points" },
                { year: "2016", details: "Programming 1, Grade B" },
                { year: "2003 – 2006", details: "High School, Aesthetic Orientation TV Production, 2500 points" },
            ],
            work: [
                {
                    year: "2024 – Present",
                    details:
                        "Hjulverkstan - Open-source project for Save the Children via Alten, where I am currently interning.\nUsing: Java, JavaScript, TypeScript, Spring Boot, React",
                    link: {
                        text: "GitHub",
                        href: "https://github.com/Hjulverkstan/hjulverkstan",
                    },
                },
                { year: "2008 – Present", details: "ICA - Warehouse worker, various roles including team leader" },
                { year: "2007", details: "Svensk Bevakningstjänst - Security guard and civilian guard" },
            ],
        },
    },
    languages: {
        title: "Languages & Miscellaneous",
        content: [
            { name: "Swedish", level: "Fluent in speaking & writing" },
            { name: "English", level: "Fluent in speaking & writing" },
        ],
    },
    hobbies: {
        title: "Hobbies",
        content:
            "Photography with my own business, cooking, brewing beer, baking sourdough bread, fishing, and going on nature trips with my family.",
    },
    contact: {
        title: "Contact",
        content: [
            { type: "Address", details: "Briljantvägen 55, 44260 Kode" },
            { type: "Email", details: "Daniel-Svendsen@hotmail.se" },
            { type: "Phone", details: "0707714306" },
        ],
    },
};

export default cvContent;
