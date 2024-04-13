/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Chandni's Portfolio",
  description:
    "Dedicated professional specializing in crafting and implementing end-to-end SEO strategies that drive sustainable online growth and impactful results.",
  og: {
    title: "Chandni Dave Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Chandni Dave",
  logo_name: "Chandni Dave",
  nickname: "SEO Analyst",
  subTitle:
    "A dedicated SEO analyst driven by a passion for creating end-to-end strategies that cultivate sustainable and scalable online systems, aiming to make a significant impact on digital landscapes.",
  resumeLink:
    "https://drive.google.com/file/d/11kz1SJBBvAR2Wlvub2C-G0BDMjDX8ZHb/view",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chandni-dave-738261196",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:davechandni6666@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "SEO Analysis & Strategy",
      fileName: "SEOImg",
      skills: [
        "⚡ Developing comprehensive SEO strategies to enhance online visibility and organic traffic",
        "⚡ Conducting in-depth keyword research and competitive analysis",
        "⚡ Optimizing on-page elements, including content and meta tags, for improved search rankings",
        "⚡ Building high-quality backlink profiles and managing outreach campaigns",
      ],
      softwareSkills: [
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Google Search Console",
          fontAwesomeClassname: "simple-icons:googlesearchconsole",
          style: {
            color: "#0F9D58",
          },
        },
        {
          skillName: "Plausible Analytics",
          fontAwesomeClassname: "simple-icons:plausibleanalytics",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "SEMrush",
          fontAwesomeClassname: "simple-icons:semrush",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    // ... other sections
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "SEOlympics",
      iconifyClassname: "simple-icons:seo",
      style: {
        color: "#D00000",
      },
      profileLink: "https://www.seolympics.com/layman_brother/",
    },
    {
      siteName: "SearchRank Masters",
      iconifyClassname: "simple-icons:searchengineland",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.searchrankmasters.com/layman_brother",
    },
    {
      siteName: "LinkBuilding Arena",
      iconifyClassname: "simple-icons:linkbuilding",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.linkbuildingarena.com/ashutosh_1919",
    },
    {
      siteName: "SEOforces",
      iconifyClassname: "simple-icons:seo",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://seoforces.com/profile/layman_brother",
    },
    {
      siteName: "SEOEpic",
      iconifyClassname: "simple-icons:seo",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.seoepic.com/@ashutosh391",
    },
    {
      siteName: "Kaggle SEO Challenges",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/seo_champion",
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "Dr. Shubash Technical Campus, Gujarat Technical University",
      subtitle: "B.E. in Information Technology",
      logo_path: "GTU_logo.jpg",
      alt_name: "Gujarat Technical University",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I studied a comprehensive curriculum including core IT subjects such as Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
        "⚡ Additionally, I pursued specialized courses in SEO, Digital Marketing, Web Analytics, and Online Branding to develop a strong foundation in Search Engine Optimization.",
        "⚡ I received recognition for outstanding academic performance and received the university's top student award in the field of IT.",
      ],
      website_link: "http://gtu.ac.in",
    },
  ],
};


const certifications = {
  certifications: [
    {
      title: "SEO Mastery",
      subtitle: "- Moz Academy",
      logo_path: "moz_logo.png",
      certificate_link:
        "https://academy.moz.com/certificates/layman_brother/seo-mastery",
      alt_name: "Moz",
      color_code: "#FFBB0099",
    },
    {
      title: "Advanced Google Analytics",
      subtitle: "- Google Analytics Academy",
      logo_path: "google_analytics_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/daxoOya7RNi5Vj1JalA15g",
      alt_name: "Google Analytics",
      color_code: "#4285F499",
    },
    {
      title: "Digital Marketing Specialization",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/YOUR_CERTIFICATE_ID",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Search Engine Optimization (SEO) Certification",
      subtitle: "- HubSpot Academy",
      logo_path: "hubspot_logo.png",
      certificate_link:
        "https://academy.hubspot.com/certificates/YOUR_CERTIFICATE_ID",
      alt_name: "HubSpot",
      color_code: "#FF7C00",
    },
    {
      title: "Google Ads Fundamentals",
      subtitle: "- Google Academy for Ads",
      logo_path: "google_ads_logo.png",
      certificate_link:
        "https://skillshop.exceedlms.com/certificates/YOUR_CERTIFICATE_ID",
      alt_name: "Google Ads",
      color_code: "#0C9D5899",
    },
    {
      title: "Content Marketing Certification",
      subtitle: "- Content Marketing Institute",
      logo_path: "cmi_logo.png",
      certificate_link:
        "https://www.contentmarketinginstitute.com/YOUR_CERTIFICATE_URL",
      alt_name: "Content Marketing Institute",
      color_code: "#D83B0199",
    },
    {
      title: "Social Media Marketing",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/YOUR_CERTIFICATE_URL",
      alt_name: "LinkedIn Learning",
      color_code: "#0077B599",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with diverse organizations, utilizing my SEO expertise to enhance online visibility and drive organic growth. From strategic planning to technical optimizations, I have contributed to various aspects of SEO across different roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Jr. SEO Executive",
          company: "Adit Adv Pvt Ltd",
          company_url: "https://www.adit.com/",
          logo_path: "adit_logo.jpg",
          duration: "Apr 2020 - June 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "As a Jr. SEO Executive, I focused on optimizing on-page elements, executing off-site SEO strategies, performing link building, conducting keyword research, and analyzing competitors to improve website visibility and search rankings.",
          color: "#0879bf",
        },
        {
          title: "Sr. SEO Executive",
          company: "AIS Technolabs Pvt Ltd",
          company_url: "https://www.aistechnolabs.com/",
          logo_path: "ais_logo.jpg",
          duration: "June 2021 - Jul 2022",
          location: "Ahmedabad, Gujarat",
          description:
            "As a Sr. SEO Executive, I led content planning and strategy, analyzed competitors and target audiences, performed copywriting and SEO editing, managed on-page and off-page activities, provided website structure recommendations, and managed a team.",
          color: "#9b1578",
        },
        {
          title: "Sr. SEO Analyst",
          company: "E2M Solutions",
          company_url: "https://www.e2msolutions.com/",
          logo_path: "e2m_logo.jpg",
          duration: "Oct 2022 - Present",
          location: "Ahmedabad, Gujarat",
          description:
            "In my current role as a Sr. SEO Analyst, I conduct technical SEO audits, recommend page content optimizations, manage on-page SEO activities, generate quarterly reports, optimize website and landing pages, communicate with clients, and formulate monthly SEO strategies.",
          color: "#fc1f20",
        },
      ],
    },
    // ... (rest of the sections, internships, and volunteerships remain unchanged)
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Explore my SEO Analyst projects - innovative web apps leveraging advanced cloud tech for optimized online presence.",
  avatar_image_path: "projects_image.svg",
};

const ProjectsData = [
  {
    name: "Wahha Design",
    url: "https://wahhadesign.com/",
    description: "In this I am handling 18+ projects.\n Monthly Strategy- Technical Recommendations -E-A-T expertise - Target audience analysis - Content strategy,development, planning - Image optimization - Domain management and strategy - Log file analysis - DNS and CDN management - Analysis Keywords with Impression",
    languages: []
  },
  {
    name: "Tree Doctor USA",
    url: "https://www.treedoctorusa.com/",
    description: "- Website Structure - Page Recommendation - Technical Fixes - Track conversation from analytics - Indexing from search console - Content Management - Google Business Profile Optimization",
    languages: []
  },
  {
    name: "Denta Marketing",
    url: "https://dentamarketing.com/",
    description: "- Technical On-site Audit - On Page Recommendation - Competitors Analysis - Niche wise keywords Improvement - GBP Profile Optimization",
    languages: []
  }
]
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Engage with me across multiple social channels for prompt assistance.I'm your go-to resource for Machine Learning, Artificial Intelligence, React, Android, Cloud, and Open Source Development queries, ensuring a timely response within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ahmedabad, Gujarat - 380006",
    locality: "Ambavadi",
    country: "IN",
    region: "Gujarat",
    postalCode: "380006",
    streetAddress: "Ambavadi",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  ProjectsData,
  contactPageData,
};
