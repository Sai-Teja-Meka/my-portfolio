import { Brain, Database, Globe, Cpu } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Sai Teja Meka",
  role: "AI Systems Architect & Data Scientist",
  location: "New Jersey, USA",
  email: "saitejameka45usa@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-teja-meka-b336211b6", 
  github: "https://github.com/Sai-Teja-Meka",
  bio: "Ambitious AI systems builder focused on precision, logical reasoning, and systematic fact-checking. I view AI as an infinite space demanding continuous refinement and human wisdom.",
  status: "Open to Work • AI & Data Science"
};

export const SKILLS = [
  { category: "AI & Agents", icon: Brain, items: ["LLM Agents", "LangChain", "CrewAI", "RAG Systems", "Prompt Engineering"] },
  { category: "Machine Learning", icon: Cpu, items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "GPT-4 API"] },
  { category: "Data Engineering", icon: Database, items: ["SQL", "ETL Pipelines", "Power BI", "Data Warehousing"] },
  { category: "Full Stack", icon: Globe, items: ["React", "TypeScript", "Python", "FastAPI", "Docker", "AWS"] },
];

export const EXPERIENCE = [
  {
    id: 1,
    year: "2024",
    title: "Data Science Consultant",
    company: "PepsiCo (Capstone)",
    description: "Developed predictive analytics models to optimize packaging performance. Built statistical simulations that improved R&D decision-making speed by 25%.",
    tech: ["Python", "Statistical Modeling", "Predictive Analytics"]
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Data Analyst",
    company: "Savant Instruments",
    description: "Engineered live Power BI dashboards and AI-powered reporting pipelines. Cut reporting overhead by 40% and improved forecasting accuracy by 25%.",
    tech: ["Power BI", "SQL", "Python Automation"]
  },
  {
    id: 3,
    year: "2020 - 2022",
    title: "Junior Data Analyst",
    company: "Savant Instruments",
    description: "Automated data pipelines ensuring 95% accuracy. Migrated manual workflows to cloud-connected platforms.",
    tech: ["ETL", "Cloud Migration", "Python"]
  }
];

export const PROJECTS = [
  {
    title: "LLM Content Moderator",
    category: "AI Safety",
    description: "Agent-driven workflow for content classification achieving 85%+ consistency with human review using Few-Shot prompting.",
    tech: ["OpenAI GPT-4", "LangChain", "Streamlit"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Content_Moderator-Guardian-AI-",
    demoUrl: "https://contentmoderator.streamlit.app/",
    featured: true
  },
  {
    title: "Deep Blue Agent",
    category: "AI Persona",
    description: "A personalized AI agent interface that synthesizes knowledge from user input and operates across local and cloud environments.",
    tech: ["Python", "REST APIs", "Dynamic Context"],
    link: "#",
    featured: true
  },
  {
    title: "ScholarGPT",
    category: "EdTech AI",
    description: "Modular AI study companion using Crew AI to orchestrate specialized agents (summarizer, quizzer) for rapid learning.",
    tech: ["CrewAI", "Web Speech API", "Multi-Agent Systems"],
    link: "#",
    featured: true
  },
  {
    title: "Energy Sim AI",
    category: "Simulation",
    description: "Probabilistic AI simulator modeling renewable energy generation and storage balancing based on weather conditions.",
    tech: ["NumPy", "Scikit-learn", "Streamlit"],
    link: "#",
    featured: false
  }

];
