const cvContent = {
    profile: {
        name: "Daniel Svendsén",
        description:
            "A dedicated and versatile individual with experience in both leadership and technical work, always striving to see the bigger picture.",
    },
    skills: {
        title: "Profile & Skills",
        content: [
            "Motivated and versatile full-stack/system developer with a strong background in leadership and technical problem-solving. Currently completing my Java Enterprise Developer program at Yrgo. Passionate about designing scalable applications, improving workflows, and collaborating in Agile teams. Skilled in both backend and frontend development, with experience in Java, TypeScript, Spring Boot, and React.",
            {name: "Operating Systems", details: "Windows, WSL"},
            {name: "Languages", details: "Java, JavaScript, TypeScript, HTML/CSS"},
            {
                name: "Tools",
                details: "Spring Boot, JUnit, IntelliJ, Docker, Jenkins, Bash, Git, Maven, Gradle, Vue, Vite, React, VSCode"
            },
            {name: "Databases", details: "SQL, MySQL, MongoDB, SQL Server, SQLite"},

            {
                name: "Soft Skills",
                details: "Leadership, Mentorship, Teamwork, Communication, Problem-Solving, Adaptability, Critical Thinking"
            },

            {name: "Work Methodologies", details: "Agile methodologies, Scrum, Kanban"},
        ],
    },
    experience: {
        title: "Experience",
        content: {
            education: [
                {year: "2023 – Present", details: "Java Enterprise Developer, Yrgo, City of Gothenburg, 400 YH points"},
                {year: "2016", details: "Programming 1, Grade B"},
                {year: "2003 – 2006", details: "High School, Aesthetic Orientation TV Production, 2500 points"},
            ],
            work: [
                {
                    year: "2024 – Present",
                    details:
                        "Internship for 27 weeks total + freetime contributing\n" +
                        "Developing an open-source platform for Save the Children via Alten as part of my internship. Main contributions:\n\n" +
                        "- Full-stack development using Java, TypeScript, Spring Boot, and React.\n" +
                        "- API integrations.\n" +
                        "- Writing and optimizing backend logic using Spring Boot.\n" +
                        "- Building and enhancing frontend components in React.\n" +
                        "- Using GitHub for version control and code collaboration.\n" +
                        "- Working with Agile methodologies in a team setting.",
                    link: {
                        text: "GitHub",
                        href: "https://github.com/Hjulverkstan/hjulverkstan",
                    },
                },
                {
                    year: "2008 – Present",
                    details: "ICA - Warehouse worker, various roles including:\nTeam leader\nPeer supporter\nTeaching\nGoods recipient"
                },
                {year: "2007", details: "Svensk Bevakningstjänst - Security guard and civilian guard"},
            ],
        },
    },
    languages: {
        title: "Languages & Miscellaneous",
        content: [
            {name: "Swedish", level: "Fluent in speaking & writing"},
            {name: "English", level: "Fluent in speaking & writing"},
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
            {type: "Address", details: "Briljantvägen 55, 44260 Kode"},
            {type: "Email", details: "Daniel-Svendsen@hotmail.se"},
            {type: "Phone", details: "0707714306"},
            {
                type: "LinkedIn",
                link: {text: "Daniel Svendsen", href: "https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"}
            },
        ],
    },
};

export default cvContent;
