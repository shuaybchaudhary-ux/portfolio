export type Project = {
  slug: string;
  code: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;

  stack: string[];

  skills: string[];

  githubUrl?: string;
  liveUrl?: string;

  caseStudy: {
    problem: string;
    approach: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "nova",
    code: "NOVA",
    title: "E-commerce Operations Analytics",
    category: "DATA / OPERATIONS",

    description:
      "An analytical system for understanding orders, products, customers and operational performance.",

    coverImage: "/projects/nova/cover.png",

    stack: [
      "SQL",
      "Excel",
      "Power BI",
      "Python",
      "Pandas",
      "NumPy",
    ],

    skills: [
      "Data Cleaning",
      "Exploratory Analysis",
      "SQL Analytics",
      "KPI Design",
      "Business Intelligence",
      "Data Visualization",
      "Business Insights",
    ],

    githubUrl: "YOUR_GITHUB_URL",

    liveUrl: "YOUR_NETLIFY_OR_VERCEL_URL",

    caseStudy: {
      problem:
        "Understand operational performance across orders, products and customers.",

      approach:
        "Cleaned and structured the data, performed SQL and Python analysis, defined KPIs and built an executive dashboard.",

      outcome:
        "Created a reusable analytical workflow connecting raw data with business questions and decisions.",
    },
  },
];