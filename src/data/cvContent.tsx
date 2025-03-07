const cvContent = {
  profile: {
    name: 'Daniel Svendsén',
    description:
      'A dedicated and versatile individual with experience in both leadership and technical work, always striving to see the bigger picture.',
  },
  skills: {
    title: 'Profile & Skills',
    content: [
      'Motivated and versatile full-stack/system developer with a background in leadership and technical problem-solving. Currently completing my Java Enterprise Developer program at Yrgo. Passionate about designing scalable applications, improving workflows, and collaborating in Agile teams.',

      {
        name: 'Languages',
        details: [
          { tool: 'Java', icon: 'Java' },
          { tool: 'JavaScript', icon: 'JavaScript' },
          { tool: 'TypeScript', icon: 'TypeScript' },
          { tool: 'HTML/CSS', icon: 'HTML/CSS' },
        ],
      },
      {
        name: 'Tools',
        details: [
          { tool: 'Spring Boot', icon: 'Spring Boot' },
          { tool: 'IntelliJ', icon: 'IntelliJ' },
          { tool: 'Docker', icon: 'Docker' },
          { tool: 'Jenkins', icon: 'Jenkins' },
          { tool: 'Bash', icon: 'Bash' },
          { tool: 'Git', icon: 'Git' },
          { tool: 'Gradle', icon: 'Gradle' },
          { tool: 'Vite', icon: 'Vite' },
          { tool: 'React', icon: 'React' },
        ],
      },
      {
        name: 'Databases',
        details: [
          { tool: 'SQL', icon: 'SQL' },
          { tool: 'MySQL', icon: 'MySQL' },
          { tool: 'MongoDB', icon: 'MongoDB' },
          { tool: 'SQL Server', icon: 'SQL Server' },
          { tool: 'SQLite', icon: 'SQLite' },
        ],
      },
      {
        name: 'Soft Skills',
        details:
          'Leadership, Mentorship, Teamwork, Communication, Problem-Solving, Adaptability, Critical Thinking',
      },
      {
        name: 'Work Methodologies',
        details: 'Agile methodologies, Scrum, Kanban',
      },
    ],
  },
  experience: {
    title: 'Experience',
    content: {
      education: [
        {
          year: '2023 – Present',
          details:
            'Java Enterprise Developer, Yrgo, City of Gothenburg, 400 YH points',
        },
        { year: '2016', details: 'Programming 1, Grade B' },
        {
          year: '2003 – 2006',
          details:
            'High School, Aesthetic Orientation TV Production, 2500 points',
        },
      ],
      work: [
        {
          year: '2024 – Present',
          details:
            'Internship for 27 weeks total + freetime contributing\n' +
            'Developing an open-source platform for Save the Children via Alten as part of my internship. Main contributions:\n\n' +
            '- Full-stack development using Java, TypeScript, Spring Boot, and React.\n' +
            '- API integrations.\n' +
            '- Writing and optimizing backend logic using Spring Boot.\n' +
            '- Building and enhancing frontend components in React.\n' +
            '- Using GitHub for version control and code collaboration.\n' +
            '- Working with Agile methodologies in a team setting.',
          link: {
            text: 'GitHub',
            href: 'https://github.com/Hjulverkstan/hjulverkstan',
          },
        },
        {
          year: '2008 – Present',
          details:
            'ICA - Warehouse worker, various roles including:\nTeam leader \n- Ability to change tactics depending on what the day brings\nPeer supporter\n- Helping colleagues in tough situations and/or addictions\nTeaching\n- Teaching colleagues how to operate truck/use system to achieve goals\n Improvement team\n- Work on improvement suggestions we received from employees\nGoods recipient\n- Recieving goods from trucks and making sure they get into the system',
        },
        {
          year: '2007',
          details:
            'Svensk Bevakningstjänst - Security guard and civilian guard',
        },
      ],
    },
  },
  languages: {
    title: 'Languages & Miscellaneous',
    content: [
      { name: 'Swedish', level: 'Fluent in speaking & writing' },
      { name: 'English', level: 'Fluent in speaking & writing' },
    ],
  },
  hobbies: {
    title: 'Hobbies',
    content:
      'Photography with my own business, cooking, brewing beer, baking sourdough bread, fishing, and going on nature trips with my family.',
  },
  contact: {
    title: 'Contact',
    content: [
      { type: 'Address', details: 'Briljantvägen 55, 44260 Kode' },
      { type: 'Email', details: 'Daniel-Svendsen@hotmail.se' },
      { type: 'Phone', details: '0707714306' },
      {
        type: 'LinkedIn',
        link: {
          text: 'Daniel Svendsen',
          href: 'https://www.linkedin.com/in/daniel-svendsen-02423a1b4/',
        },
      },
    ],
  },
}

export default cvContent
