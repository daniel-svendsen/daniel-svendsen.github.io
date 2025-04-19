DROP TABLE IF EXISTS cv_languages;
DROP TABLE IF EXISTS cv_contact;
DROP TABLE IF EXISTS cv_projects;
DROP TABLE IF EXISTS cv_experience;
DROP TABLE IF EXISTS cv_skills;
DROP TABLE IF EXISTS cv_content;

CREATE TABLE cv_content
(
    id          SERIAL PRIMARY KEY,
    section     TEXT NOT NULL,
    title       TEXT,
    description TEXT
);

CREATE TABLE cv_skills
(
    id       SERIAL PRIMARY KEY,
    cv_id    INT REFERENCES cv_content (id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    tool     TEXT,
    icon     TEXT
);

CREATE TABLE cv_experience
(
    id        SERIAL PRIMARY KEY,
    cv_id     INT REFERENCES cv_content (id) ON DELETE CASCADE,
    type      TEXT NOT NULL,
    year_text TEXT NOT NULL,
    details   TEXT NOT NULL,
    link_text TEXT,
    link_href TEXT
);

CREATE TABLE cv_projects
(
    id        SERIAL PRIMARY KEY,
    cv_id     INT REFERENCES cv_content (id) ON DELETE CASCADE,
    name      TEXT NOT NULL,
    details   TEXT NOT NULL,
    link_href TEXT
);

CREATE TABLE cv_contact
(
    id        SERIAL PRIMARY KEY,
    cv_id     INT REFERENCES cv_content (id) ON DELETE CASCADE,
    type      TEXT NOT NULL,
    details   TEXT NOT NULL,
    link_href TEXT
);

CREATE TABLE cv_languages
(
    id    SERIAL PRIMARY KEY,
    cv_id INT REFERENCES cv_content (id) ON DELETE CASCADE,
    name  TEXT NOT NULL,
    level TEXT NOT NULL
);


INSERT INTO cv_content (section, title, description)
VALUES ('profile', 'Daniel Svendsén',
        'Result-driven Full-Stack Developer with leadership background, specialized in Java, Spring Boot and React.'),
       ('hobbies', 'Hobbies',
        'Photography (own business), cooking, brewing beer, baking sourdough bread, fishing, and enjoying nature trips with my family.'),
       ('languages', 'Languages & Miscellaneous', 'Language proficiency and miscellaneous skills.'),
       ('intro', 'Introduction',
        'Motivated and versatile full-stack/system developer with a background in leadership and technical problem-solving. Currently completing the Java Enterprise Developer program at Yrgo. Passionate about designing scalable applications, improving workflows, and collaborating in Agile teams.');

-- Delete existing skills first if you're re-running this script
DELETE
FROM cv_skills
WHERE cv_id = 1;
-- Assuming cv_id 1 is your CV entry

-- Skills You Have Experience In:
INSERT INTO cv_skills (cv_id, category, tool, icon)
VALUES (1, 'Experienced Languages', 'Java', 'Java'),
       (1, 'Experienced Languages', 'JavaScript', 'JavaScript'),
       (1, 'Experienced Languages', 'TypeScript', 'TypeScript'),
       (1, 'Experienced Languages', 'HTML/CSS', 'HTML/CSS'),
       (1, 'Experienced Languages', 'SQL', 'SQL'),
       (1, 'Experienced Frameworks/Tools', 'Spring Boot', 'Spring Boot'),
       (1, 'Experienced Frameworks/Tools', 'React', 'React'),
       (1, 'Experienced Frameworks/Tools', 'Vite', 'Vite'),
       (1, 'Experienced Frameworks/Tools', 'Git', 'Git'),
       (1, 'Experienced Frameworks/Tools', 'Railway', 'Railway'),
       (1, 'Experienced Frameworks/Tools', 'Cloudflare', 'Cloudflare'),
       (1, 'Experienced Methodologies', 'Scrum', NULL),
       (1, 'Experienced Methodologies', 'Kanban', NULL);
-- Adjusted category

-- Skills You Know Of (from School):
INSERT INTO cv_skills (cv_id, category, tool, icon)
VALUES (1, 'Familiar Frameworks/Tools', 'Gradle', 'Gradle'),
       (1, 'Familiar Frameworks/Tools', 'Docker', 'Docker'),
       (1, 'Familiar Frameworks/Tools', 'Jenkins', 'Jenkins'),
       (1, 'Familiar Frameworks/Tools', 'Bash', 'Bash'),
       (1, 'Familiar Frameworks/Tools', 'JUnit 5', 'JUnit 5'),
       (1, 'Familiar Databases', 'SQL Server', 'SQL Server'),
       (1, 'Familiar Databases', 'MySQL', 'MySQL'),
       (1, 'Familiar Databases', 'MongoDB', 'MongoDB'),
       (1, 'Familiar Databases', 'SQLite', 'SQLite');

-- Soft Skills (Category remains unchanged or adjust as needed)
INSERT INTO cv_skills (cv_id, category, tool, icon)
VALUES (1, 'Soft Skills',
        'Leadership, Mentorship, Teamwork, Communication, Problem-Solving, Adaptability, Critical Thinking', NULL);

-- Consider if Agile itself is experienced or familiar
INSERT INTO cv_skills (cv_id, category, tool, icon)
VALUES (1, 'Experienced Methodologies', 'Agile methodologies', NULL); -- Kept as Experienced since Scrum/Kanban are


INSERT INTO cv_experience (cv_id, type, year_text, details, link_text, link_href)
VALUES (1, 'work', '2024 – Present',
        'Internship - Full-Stack Developer at Alten (for Save the Children). Developing an open-source platform during a 27-week internship.
        - Contributed to full-stack development using Java, Spring Boot (backend) and React, TypeScript (frontend).
        - Implemented and optimized backend logic and API integrations.
        - Built and enhanced responsive frontend components.
        - Utilized GitHub for version control and collaboration within an Agile (Scrum) team.',
        'Project GitHub', 'https://github.com/Hjulverkstan/hjulverkstan'),
       (1, 'work', '2008 – Present',
        'ICA - Warehouse worker, various roles including:
Team leader - Ability to change tactics depending on what the day brings
Peer supporter - Helping colleagues in tough situations and/or addictions
Teaching - Teaching colleagues how to operate truck/use system to achieve goals
Improvement team - Work on improvement suggestions received from employees
Goods recipient - Recieving goods from trucks and ensuring proper system entry',
        NULL, NULL),
       (1, 'education', '2023 – Present',
        'Java Enterprise Developer, Yrgo, Vocational Education, Gothenburg (400 YH points)', NULL, NULL),
       (1, 'education', '2016', 'Programming 1 (C#)', NULL, NULL);


INSERT INTO cv_projects (cv_id, name, details, link_href)
VALUES (1, 'Personal Website & CV',
        'Built the website for my photography company and this dynamic CV page using React, Vite, and Tailwind CSS. Features include dynamic PDF generation, responsive design, and fetching CV data from a database. Hosted on Cloudflare Pages with CI/CD via GitHub Actions; backend and database deployed on Railway.',
        'https://www.svendsenphotography.com/work'),
       (1, 'Receptobot',
        'Developed Receptobot, an AI-powered service generating recipes via OpenAI''s API based on user input (ingredients, allergies, cuisine). Requires login (5 fetches/user) and possibility to save recipes to users profilepage. Backend: Spring Boot with Bucket4j (rate-limiting). Frontend: React, Vite, Tailwind CSS. Deployed on Railway with Cloudflare DNS.',
        'https://www.receptobot.se'),
       (1, 'TapMap',
        'Developed the frontend for TapMap, a location-based service concept displaying nearby restaurants/bars alongside real-time sun position data using React, Vite, Tailwind CSS, and Leaflet. Features include an interactive map, location data fetching, user ratings, and price tracking.',
        'https://tapmap.pages.dev/');


INSERT INTO cv_contact (cv_id, type, details, link_href)
VALUES (1, 'Address', 'Briljantvägen 55, 44260 Kode', NULL),
       (1, 'Email', 'Daniel-Svendsen@hotmail.se', NULL),
       (1, 'Phone', '0707714306', NULL),
       (1, 'LinkedIn', 'Daniel Svendsén Profile', 'https://www.linkedin.com/in/daniel-svendsen-02423a1b4/');


INSERT INTO cv_languages (cv_id, name, level)
VALUES (3, 'Swedish', 'Native / Fluent'),
       (3, 'English', 'Fluent');