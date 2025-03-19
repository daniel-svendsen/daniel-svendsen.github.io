-- H2-version: Rensa befintliga tabeller
DROP TABLE IF EXISTS cv_languages;
DROP TABLE IF EXISTS cv_contact;
DROP TABLE IF EXISTS cv_projects;
DROP TABLE IF EXISTS cv_experience;
DROP TABLE IF EXISTS cv_skills;
DROP TABLE IF EXISTS cv_content;

-- Skapa huvudtabell för CV-innehåll
CREATE TABLE cv_content
(
    id          SERIAL PRIMARY KEY,
    section     TEXT NOT NULL, -- Exempel: 'profile', 'hobbies', 'languages'
    title       TEXT,
    description TEXT
);

-- Skapa tabell för tekniska färdigheter (skills)
CREATE TABLE cv_skills
(
    id       SERIAL PRIMARY KEY,
    cv_id    INT REFERENCES cv_content (id) ON DELETE CASCADE,
    category TEXT NOT NULL, -- Exempel: 'Languages', 'Tools', 'Databases', 'Soft Skills', 'Work Methodologies'
    tool     TEXT,
    icon     TEXT
);

-- Skapa tabell för utbildning och arbetslivserfarenhet (experience)
-- OBS: Kolumnen heter year_text istället för "year" för att undvika reserverade ord
CREATE TABLE cv_experience
(
    id        SERIAL PRIMARY KEY,
    cv_id     INT REFERENCES cv_content (id) ON DELETE CASCADE,
    type      TEXT NOT NULL, -- 'education' eller 'work'
    year_text TEXT NOT NULL,
    details   TEXT NOT NULL,
    link_text TEXT,
    link_href TEXT
);

-- Skapa tabell för personliga projekt (projects)
CREATE TABLE cv_projects
(
    id      SERIAL PRIMARY KEY,
    cv_id   INT REFERENCES cv_content (id) ON DELETE CASCADE,
    name    TEXT NOT NULL,
    details TEXT NOT NULL
);

-- Skapa tabell för kontaktuppgifter (contact)
CREATE TABLE cv_contact
(
    id        SERIAL PRIMARY KEY,
    cv_id     INT REFERENCES cv_content (id) ON DELETE CASCADE,
    type      TEXT NOT NULL, -- Exempel: 'Email', 'Phone', 'LinkedIn'
    details   TEXT NOT NULL,
    link_href TEXT
);

-- Skapa tabell för språk (Languages & Miscellaneous)
CREATE TABLE cv_languages
(
    id    SERIAL PRIMARY KEY,
    cv_id INT REFERENCES cv_content (id) ON DELETE CASCADE,
    name  TEXT NOT NULL, -- Exempel: 'Swedish'
    level TEXT NOT NULL  -- Exempel: 'Fluent in speaking & writing'
);

---------------------------------------------------
-- Lägg in data enligt din statiska datastruktur
---------------------------------------------------

-- A. cv_content: "profile", "hobbies" och "languages"
INSERT INTO cv_content (section, title, description)
VALUES ('profile', 'Daniel Svendsén',
        'A dedicated and versatile individual with experience in both leadership and technical work, always striving to see the bigger picture.'),
       ('hobbies', 'Hobbies',
        'Photography with my own business, cooking, brewing beer, baking sourdough bread, fishing, and going on nature trips with my family.'),
       ('languages', 'Languages & Miscellaneous', 'Languages proficiency and miscellaneous skills'),
       ('intro', 'Introduction',
        'I built the website for my photography company and this work page myself using React, Vite, and Tailwind CSS. It includes interactive features such as a dynamic PDF generator, responsive design,fetching data from a database for the cv page. Website hosted by Cloudflare with actions on main pushes and backend + database on Railway.');

-- B. cv_skills för cv_id=1 (profile)
INSERT INTO cv_skills (cv_id, category, tool, icon)
VALUES (1, 'Languages', 'Java', 'Java'),
       (1, 'Languages', 'JavaScript', 'JavaScript'),
       (1, 'Languages', 'TypeScript', 'TypeScript'),
       (1, 'Languages', 'HTML/CSS', 'HTML/CSS'),
       (1, 'Tools', 'Spring Boot', 'Spring Boot'),
       (1, 'Tools', 'IntelliJ', 'IntelliJ'),
       (1, 'Tools', 'Docker', 'Docker'),
       (1, 'Tools', 'Jenkins', 'Jenkins'),
       (1, 'Tools', 'Bash', 'Bash'),
       (1, 'Tools', 'Git', 'Git'),
       (1, 'Tools', 'Gradle', 'Gradle'),
       (1, 'Tools', 'Vite', 'Vite'),
       (1, 'Tools', 'React', 'React'),
       (1, 'Databases', 'SQL', 'SQL'),
       (1, 'Databases', 'MySQL', 'MySQL'),
       (1, 'Databases', 'MongoDB', 'MongoDB'),
       (1, 'Databases', 'SQLite', 'SQLite'),
       (1, 'Soft Skills',
        'Leadership, Mentorship, Teamwork, Communication, Problem-Solving, Adaptability, Critical Thinking', NULL),
       (1, 'Work Methodologies', 'Agile methodologies, Scrum, Kanban', NULL);

-- C. cv_experience för cv_id=1 (profile)
-- 1. Arbetslivserfarenhet (work)
INSERT INTO cv_experience (cv_id, type, year_text, details, link_text, link_href)
VALUES (1, 'work', '2024 – Present',
        'Internship for 27 weeks total + freetime contributing
Developing an open-source platform for Save the Children via Alten as part of my internship. Main contributions:
- Full-stack development using Java, TypeScript, Spring Boot, and React.
- API integrations.
- Writing and optimizing backend logic using Spring Boot.
- Building and enhancing frontend components in React.
- Using GitHub for version control and code collaboration.
- Working with Agile methodologies in a team setting.',
        'GitHub', 'https://github.com/Hjulverkstan/hjulverkstan'),
       (1, 'work', '2008 – Present',
        'ICA - Warehouse worker, various roles including:
Team leader - Ability to change tactics depending on what the day brings
Peer supporter - Helping colleagues in tough situations and/or addictions
Teaching - Teaching colleagues how to operate truck/use system to achieve goals
Improvement team - Work on improvement suggestions received from employees
Goods recipient - Recieving goods from trucks and ensuring proper system entry',
        NULL, NULL),
       (1, 'work', '2007', 'Svensk Bevakningstjänst - Security and civilian guard', NULL, NULL),
       (1, 'education', '2023 – Present', 'Java Enterprise Developer, Yrgo, City of Gothenburg, 400 YH points', NULL,
        NULL),
       (1, 'education', '2016', 'Programming 1, C#, Grade B', NULL, NULL),
       (1, 'education', '2003 – 2006', 'High School, Aesthetic Orientation TV Production, 2500 points', NULL, NULL);

-- D. cv_projects för cv_id=1 (profile)
INSERT INTO cv_projects (cv_id, name, details)
VALUES (1, 'Personal Website & CV',
        'I built the website for my photography company and this work page myself using React, Vite, and Tailwind CSS. It includes interactive features such as a dynamic PDF generator, responsive design,' ||
        'fetching data from a database for the cv page. Website hosted by Cloudflare with actions on main pushes and backend + database on Railway.');

-- E. cv_contact för cv_id=1 (profile)
INSERT INTO cv_contact (cv_id, type, details, link_href)
VALUES (1, 'Address', 'Briljantvägen 55, 44260 Kode', NULL),
       (1, 'Email', 'Daniel-Svendsen@hotmail.se', NULL),
       (1, 'Phone', '0707714306', NULL),
       (1, 'LinkedIn', 'Daniel Svendsén', 'https://www.linkedin.com/in/daniel-svendsen-02423a1b4/');

-- F. cv_languages för cv_id=3 (languages)
INSERT INTO cv_languages (cv_id, name, level)
VALUES (3, 'Swedish', 'Fluent in speaking & writing'),
       (3, 'English', 'Fluent in speaking & writing');
