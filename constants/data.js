const userData = {
  githubUsername: "mbianchidev",
  name: "Matteo Bianchi",
  role: "Developer | DevOps | SRE | Coach",
  avatarUrl: "/images/propic.jpg",
  email: "info@mb-consulting.dev",
  privacyMail: "privacy@mb-consulting.dev",
  siteMail: "site@mb-consulting.dev",
  address: "Full remote",
  techStack: "https://stackshare.io/mbianchidev/known-techs",
  vat: "IT11846470968",
  sdi: "M5UXCR1",
  domain: "mb-consulting.dev",
  policyUrl: "https://mb-consulting.dev/policy",
  cookieUrl: "https://www.allaboutcookies.org/",
  projects: [
    {
      title: "Portfolio website",
      link: "https://github.com/mbianchidev/site",
      imgUrl: "/images/this-site.png",
    },
    {
      title: "DevOps Basics Course for companies",
      link: "https://mb-consulting.dev/workinprogress",
      imgUrl: "/images/devops-course-table-of-contents.png",
    }
  ],
  clients: [
    {
      companyName: "GreenChic",
      companyType: "Scaleup",
      companySector: "Sustainable Fashion",
      companyLogo: "/images/clients/greenchic.png",
      companyUrl: "https://greenchic.it/",
      role: "Freelance DevOps Engineer | Site Reliability Engineer",
      story: "Currently collaborating with GreenChic to build a new cloud infrastructure for their fashion brand. The infrastructure is built on AWS and it's made of microservices, containers, EC2 instances and so much more.",
      year: "2021-2022",
      show: true
    },
    {
      companyName: "Italian Financial Police",
      companyType: "Public Administration",
      companySector: "Security and finance",
      companyLogo: "/images/clients/gdf.png",
      companyUrl: "https://www.gdf.gov.it/",
      role: "Freelance Coach (DevOps)",
      story: "Helped their IT sector to improve their DevOps practices by providing them with a DevOps course and in-depth technical knowledge on Azure.",
      year: "2021",
      show: true
    },
    {
      companyName: "D-Share",
      companyType: "Corporate",
      companySector: "Digital News & Media",
      companyLogo: "/images/clients/dshare.png",
      companyUrl: "https://www.dshare.com/",
      role: "Freelance DevOps Engineer | Site Reliability Engineer",
      story: "Managing Azure and AWS infrastructures for their news and media platform and digital products. I am responsible for the infrastructure, deployments, security and everything about the cloud.",
      year: "2021-2022",
      show: true
    },
    {
      companyName: "Infocert",
      companyType: "Corporate",
      companySector: "Digital Trust Services",
      companyLogo: "/images/clients/infocert.png",
      companyUrl: "https://gosignweb.infocert.it",
      role: "Senior Software Engineer | DevOps Engineer | Site Reliability Engineer",
      story: "I brought DevOps in a digital signature product used by thousands of people and companies all over Europe: GoSign. I managed to improve the reliability and security of the product by developing document management processes in Java and by automating infrastructure provisioning, deployment, delivery and incident management processes.",
      year: "2019-2021",
      show: true
    },
    {
      companyName: "Eco-Mind Software @ Olivetti",
      companyType: "Medium size company",
      companySector: "IT Consulting",
      companyLogo: "/images/clients/ecomind.png",
      companyUrl: "https://eco-mind.eu/",
      role: "Senior Software Engineer",
      story: "Improved my Spring and Java skills by working side by side with valuable professionals both internal and external to the company. Here I learnt the true meaning of the word 'teamwork' and how to work in a team with a diverse set of skills.",
      year: "2018-2021",
      show: true
    },  
    {
      companyName: "Reply @ A2A",
      companyType: "Corporate",
      companySector: "IT Consulting",
      companyLogo: "/images/clients/reply.png",
      companyUrl: "https://www.reply.com/it/content/smart-seller",
      role: "Fullstack Software Developer",
      story: "Got in touch with modern frontend and backend frameworks (Spring and Angular) for the first time. I was able to learn how to use them and how to build reusable components. This was also the first time i got in touch with DevOps culture and started my journey torwards my objective to become a DevOps engineer.",
      year: "2018",
      show: true
    },
    {
      companyName: "Vodafone",
      companyType: "Corporate",
      companySector: "Internet Provider & Telecomunication Services",
      companyLogo: "/images/clients/vodafone.png",
      companyUrl: "https://www.vodafone.com/",
      role: "Fullstack Software Developer",
      story: "I worked on a product that was used by the financial group of Vodafone. Here I learnt the importance of refactoring, optimization and keeping up to date with techs. I also learnt how to work in a team and how to work in a fast-paced environment and how to manage a complex IT infrastructure.",
      year: "2017-2018",
      show: true
    },
    {
      companyName: "Cambiomarcia",
      companyType: "Startup",
      companySector: "Automotive",
      companyLogo: "/images/clients/cambiomarcia.png",
      companyUrl: "https://www.cambiomarcia.com/homepage",
      role: "Fullstack Software Developer",
      story: "I learnt how a startup works and scales up and started my journey in the web development world.",
      year: "2017",
      show: true
    }
  ],
  about: {
    title:
      "I have been working in the IT industry since 2017. I'm a software developer and passionate DevOps always eager to build something new",
    description: [
      `I like to introduce myself as an agnostic and versatile engineer with a deep passion for well-written code, automation and cloud technologies.`,
      `I also love coaching and mentoring people because I strongly believe in knowledge as the only way to get rid of technical debt and develop new and game-changing digital products.`,
      `My goal is to bring value to your business by crafting quality software, choosing the best techs for your use-case, enhancing \& optimizing your processes, implementing good practices and boosting your team(s) knowledge base.`,
      `You can find out more about me in this site or by asking me, either way enjoy your stay! :)`
    ],
    currentProject: "this portfolio website",
    currentProjectUrl: "https://mb-consulting.dev",
  },
  // deprecated experience
  experience: [
    {
      title: "Senior Software Developer | DevOps Engineer | Site Reliability Engineer | Coach",
      company: "Self-employed",
      year: "2021-now",
      companyLink: "https://mb-consulting.dev",
      desc: "Offering software development craftsmanship, DevOps, SRE and cloud management services; I also teach DevOps/SRE courses tailored to your business and IT needs."
    },
    {
      title: "IT Consultant",
      company: "Various clients (InfoCert, Olivetti, Vodafone, Reply, etc.)",
      year: "2017-2021",
      companyLink: "",
      desc: "Worked in both short and long term projects for a wide pool of customers in many kind of dev teams. Learnt about the Java world and Spring in particular, always keeping an eye on the cloud. Dealt with various aspects of dev: technical doc writing, code reviewing, collaborating to ensure scalability, reliability and security of the developed solutions. As DevOps my daily focuses were: IaC, monitoring, test automation, CI/CD and cloud orchestration/management. Always had sysadmin level privileges and responsibilities while ensuring SLA compliance by designing solutions to remediate, mitigate and prevent incidents to improve services."
    },
    {
      title: "High School",
      company: "ITIS N. Baldini, Ravenna",
      year: "2017",
      companyLink: "https://itisravenna.edu.it/",
      desc: "Programming languages, hw maintenance, sw development, project management, economics fundamentals, networking and security, english language, and a lot more."
    },
  ],
  //fixed URL
  resumeUrl:
    "https://drive.google.com/u/0/uc?id=1IKSaesUuRQmtkOA0SP--3oe7gR4P0X4Y&export=download",
  socialLinks: {
    twitter: "https://twitter.com/mbianchidev",
    linkedin: "https://www.linkedin.com/in/matteo-bianchi-dev/",
    github: "https://github.com/mbianchidev"
  },
};

export default userData;
