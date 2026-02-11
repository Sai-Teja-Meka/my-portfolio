import { Brain, Database, Cpu, Cloud } from "lucide-react";

// ============================================
// TYPE DEFINITIONS - System-Wide Contracts
// ============================================

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  status: string;
}

export interface SkillCategory {
  category: string;
  icon: typeof Brain;
  items: string[];
}

export interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  tech: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  imageUrl?: string;
}

// Normalized type for Modal consumption
export interface ModalData {
  title: string;
  year: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  // Allow source tracking for debugging
  _source?: 'experience' | 'project';
}

// ============================================
// DATA EXPORTS
// ============================================

export const PERSONAL_INFO: PersonalInfo = {
  name: "Sai Teja Meka",
  role: "AI Product Engineer",
  location: "New Jersey, USA",
  email: "saitejameka45usa@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-teja-meka-b336211b6",
  github: "https://github.com/Sai-Teja-Meka",
  bio: "AI engineer with 1+ years of experience building LLM systems, multi-agent orchestration, and full-stack AI applications. Developed RAG pipelines achieving 85% consistency with human evaluation. Specialize in translating research into shipped products, from event-sourced backends to real-time 3D visualization systems.",
  status: "Open to Work • AWS Certified AI Practitioner"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Agents",
    icon: Brain,
    items: ["Multi-Agent Systems", "RAG Pipelines", "LangChain", "CrewAI", "ChromaDB", "Pinecone", "Cognitive Architecture"]
  },
  {
    category: "LLM Engineering",
    icon: Cpu,
    items: ["Prompt Engineering", "Model Evaluation", "Fine-tuning", "Embeddings", "LLM Observability", "Big Five Modeling", "Semantic Search"]
  },
  {
    category: "Full Stack & Cloud",
    icon: Cloud,
    items: ["FastAPI", "React Flow", "Next.js", "AWS (EC2/Lambda)", "Docker", "Event Sourcing", "WebSockets"]
  },
  {
    category: "Data & Core",
    icon: Database,
    items: ["Python", "Neo4j", "SQL", "PyTorch", "Scikit-learn", "Real-time Streaming", "GLSL Shaders"]
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    year: "Sep 2025 - Present",
    title: "AI Engineer Intern",
    company: "Cloud Bridge Solutions Inc",
    description: "Architected an enterprise AI education platform with 9 production modules. Built a RAG engine using Pinecone achieving sub-250ms retrieval and 92% relevance. Engineered AI lesson planners and adaptive testing achieving 88% accuracy against teacher-validated rubrics.",
    tech: ["Python", "RAG", "Pinecone", "MongoDB", "Flask", "Microservices"]
  },
  {
    id: 2,
    year: "Aug 2024 - Dec 2024",
    title: "Data Science Consultant",
    company: "PepsiCo (Capstone)",
    description: "Developed predictive ML models optimizing packaging performance. Delivered a simulation tool enabling researchers to test packaging recipe outcomes via virtual experimentation, accelerating R&D decision velocity by 25%.",
    tech: ["Predictive Modeling", "Statistical Simulation", "Python", "Gradient Boosting"]
  },
  {
    id: 3,
    year: "July 2022 - July 2023",
    title: "Data Analyst",
    company: "Savant Instruments",
    description: "Engineered real-time Power BI dashboards and AI-powered reporting pipelines, reducing manual reporting overhead by 40% with sub-hour latency insights. Built forecasting engines improving prediction accuracy by 25%.",
    tech: ["Power BI", "SQL", "ETL Pipelines", "Forecasting", "A/B Testing"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Chronos: LLM Time-Travel Debugger",
    category: "LLM Observability",
    description: "Event-sourced observability platform capturing step-level traces (tool calls, errors). Features a React Flow DAG UI with time-travel debugging (rewind/fork states) and live updates via SSE. Deployed on AWS EC2.",
    tech: ["FastAPI", "React Flow", "Event Sourcing", "AWS EC2", "PostgreSQL"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Chronos",
    demoUrl: "https://chronos-chi-eight.vercel.app/",
    imageUrl: "/assets/chronos-preview.gif", // Added image
    featured: true
  },
  {
    title: "Agent Persona Engine",
    category: "Cognitive AI",
    description: "Cognitive architecture extraction engine creating synthetic expert personas. Engineered a hybrid memory system (ChromaDB + Neo4j) achieving sub-200ms retrieval and personality drift detection.",
    tech: ["FastAPI", "Neo4j", "ChromaDB", "Big Five Model", "WebSockets"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Agent-Persona-Engine",
    demoUrl: "https://agent-persona-engine.vercel.app/",
    imageUrl: "https://raw.githubusercontent.com/Sai-Teja-Meka/Agent-Persona-Engine/main/preview.png", // Added image
    featured: true
  },
  {
    title: "LLM Content Classification",
    category: "AI Safety",
    description: "Modular agent-driven content moderation pipeline using GPT-4 and Claude. Achieved 85% consistency with human review via few-shot prompting and chain-of-thought reasoning across 10k+ segments.",
    tech: ["GPT-4", "Claude", "LangChain", "Scikit-learn"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Content_Moderator-Guardian-AI-",
    demoUrl: "https://contentmoderator.streamlit.app/",
    featured: true
  },
  {
    title: "3D Interactive Portfolio",
    category: "Creative Engineering",
    description: "Immersive 3D portfolio using React Three Fiber with custom GLSL shaders and GPU particle systems. Integrated a Groq-powered AI terminal for natural language Q&A about my skills and experience.",
    tech: ["React Three Fiber", "GLSL", "Groq API", "Zustand"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Advanced_UI",
    demoUrl: "https://advanced-ui-iota.vercel.app/",
    featured: false
  }
];

// ============================================
// TYPE GUARDS - Runtime Type Checking
// ============================================

export function isExperienceItem(item: any): item is ExperienceItem {
  return item && typeof item === 'object' && 'company' in item && 'id' in item;
}

export function isProjectItem(item: any): item is ProjectItem {
  return item && typeof item === 'object' && 'category' in item && !('company' in item);
}

// ============================================
// DATA TRANSFORMERS - Normalize for Modal
// ============================================

export function toModalData(item: ExperienceItem | ProjectItem): ModalData {
  if (isExperienceItem(item)) {
    return {
      title: item.title,
      year: item.year,
      description: `${item.company} • ${item.description}`,
      techStack: item.tech,
      _source: 'experience'
    };
  } else {
    return {
      title: item.title,
      year: "2025", // Projects default to current year
      description: item.description,
      techStack: item.tech,
      imageUrl: item.imageUrl,
      _source: 'project'
    };
  }
}