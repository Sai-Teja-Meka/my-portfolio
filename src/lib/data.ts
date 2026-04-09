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

export interface HackathonItem {
  title: string;
  event: string;
  description: string;
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  focus?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

// Normalized type for Modal consumption
export interface ModalData {
  title: string;
  year: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
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
  bio: "AI engineer with 1+ years of experience building LLM systems, multi-agent orchestration, and full-stack AI applications. Fine-tuning specialist (LoRA/Unsloth, vLLM, GRPO/LADDER RL). Built multi-persona platforms with self-evolving cognitive architectures, RAG pipelines achieving 92%+ relevance, and event-sourced observability tools.",
  status: "Open to Work • AWS Certified AI Practitioner"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Agents",
    icon: Brain,
    items: [
      "Multi-Agent Systems", "RAG Pipelines", "LLM Orchestration",
      "LoRA Fine-tuning (Unsloth)", "vLLM Serving", "GRPO/LADDER RL",
      "Prompt Engineering", "Vector DBs (pgvector, ChromaDB, Pinecone)",
      "Knowledge Graphs (Neo4j)", "Model Evaluation", "Embeddings",
      "Semantic Search", "Claude Code", "Ollama", "LM Studio"
    ]
  },
  {
    category: "Backend & APIs",
    icon: Cpu,
    items: [
      "Python", "FastAPI", "Node.js", "REST APIs", "WebSockets",
      "JWT Authentication", "PostgreSQL", "Neo4j", "MongoDB",
      "Event Sourcing", "Real-time Streaming", "Async Processing"
    ]
  },
  {
    category: "Frontend & Visualization",
    icon: Database,
    items: [
      "React", "Next.js", "TypeScript", "React Three Fiber",
      "Streamlit", "React Flow", "Tailwind CSS"
    ]
  },
  {
    category: "Data & Infrastructure",
    icon: Cloud,
    items: [
      "PyTorch", "LangChain", "CrewAI", "OpenAI/Anthropic APIs",
      "Docker", "Git", "SQL", "NumPy", "Scikit-learn",
      "RunPod (GPU Serving)", "LiteLLM", "Hugging Face Hub"
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS (EC2, S3, Lambda)", "Google Cloud Platform", "RunPod",
      "Hugging Face Hub", "CI/CD", "Container Orchestration"
    ]
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    year: "Sep 2025 - Present",
    title: "AI Engineer Intern",
    company: "Cloud Bridge Solutions Inc",
    description: "Architected enterprise-scale AI education platform with 9 production modules across 15,000+ lines of Python/JavaScript. Built RAG engine with Pinecone achieving sub-250ms retrieval and 92%+ relevance across 1,200+ query scenarios. Engineered AI lesson planners and adaptive testing achieving 88% accuracy against teacher-validated rubrics.",
    tech: ["Python", "RAG", "Pinecone", "MongoDB", "Flask", "Microservices", "OpenAI"]
  },
  {
    id: 2,
    year: "Aug 2024 - Dec 2024",
    title: "Data Science Consultant",
    company: "PepsiCo (Capstone)",
    description: "Developed predictive ML models (linear regression, gradient-boosted trees) optimizing packaging performance with feature engineering on material properties. Delivered a simulation tool enabling researchers to test packaging recipe outcomes via virtual experimentation, accelerating R&D decision velocity by 25%.",
    tech: ["Predictive Modeling", "Statistical Simulation", "Python", "Gradient Boosting"]
  },
  {
    id: 3,
    year: "Jul 2022 - Jul 2023",
    title: "Data Analyst",
    company: "Savant Instruments",
    description: "Engineered real-time Power BI dashboards and AI-powered reporting pipelines for B2B water analytics, reducing manual reporting overhead by 40%. Automated Python/SQL ETL workflows and built forecasting engines, improving prediction accuracy by 25%.",
    tech: ["Power BI", "SQL", "ETL Pipelines", "Python", "Forecasting", "A/B Testing"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Combo: Cognitive Lens Engine",
    category: "Multi-Persona AI",
    description: "Multi-persona AI platform with individually fine-tuned specialists (LLaMA 3.1 8B, Qwen2.5-Math-7B) deployed via vLLM with native LoRA adapter switching on RunPod A40 GPUs. Built semantic claims extraction pipeline (PostgreSQL + pgvector + Neo4j) enabling autonomous self-evolution. Completed full LADDER reinforcement learning cycle: SFT → 79%, GRPO → 72%, LADDER+replay → 78% recovery.",
    tech: ["PostgreSQL", "pgvector", "Neo4j", "vLLM", "LoRA/Unsloth", "FastAPI", "React", "RunPod", "LiteLLM"],
    githubUrl: "https://github.com/Sai-Teja-Meka",
    featured: true
  },
  {
    title: "Chronos: LLM Time-Travel Debugger",
    category: "LLM Observability",
    description: "Event-sourced LLM observability platform capturing step-level traces (messages, tool calls/results, errors) with time-travel debugging: rewind to any state, fork 'what-if' branches, compare timelines. Interactive conversation DAG UI with live SSE updates in React Flow. Deployed on AWS EC2 with Docker Compose (backend, Postgres, Redis, pgAdmin). Validated on AIMO3 mathematical reasoning benchmarks.",
    tech: ["FastAPI", "React Flow", "Event Sourcing", "AWS EC2", "PostgreSQL", "Docker", "Redis", "SSE"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Chronos",
    demoUrl: "https://chronos-chi-eight.vercel.app/",
    imageUrl: "/assets/chronos-preview.gif",
    featured: true
  },
  {
    title: "Agent Persona Engine",
    category: "Cognitive AI",
    description: "Solo-built cognitive architecture extraction engine creating synthetic expert personas from technical discussions. Extracts 8 layers of cognitive DNA (identity, mental models, reflexes, reasoning chains, Big Five traits). Hybrid memory system (ChromaDB + Neo4j) with sub-200ms retrieval and personality drift detection with autocorrection. Production React frontend with real-time WebSocket streaming and side-by-side persona vs. vanilla GPT comparison.",
    tech: ["FastAPI", "Neo4j", "ChromaDB", "Big Five Model", "WebSockets", "React", "OpenAI API"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Agent-Persona-Engine",
    demoUrl: "https://agent-persona-engine.vercel.app/",
    imageUrl: "https://raw.githubusercontent.com/Sai-Teja-Meka/Agent-Persona-Engine/main/preview.png",
    featured: true
  },
  {
    title: "LLM Content Classification",
    category: "AI Safety",
    description: "Modular agent-driven content moderation pipeline using GPT-4 and Claude. Achieved 85% consistency with human review via few-shot prompting and chain-of-thought reasoning across 10k+ segments.",
    tech: ["GPT-4", "Claude", "LangChain", "Scikit-learn"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Content_Moderator-Guardian-AI-",
    demoUrl: "https://contentmoderator.streamlit.app/",
    imageUrl: "https://raw.githubusercontent.com/Sai-Teja-Meka/Agent-Persona-Engine/main/preview.png",
    featured: true
  },
  {
    title: "GestureFlow: Webcam Gesture Control",
    category: "Computer Vision",
    description: "Real-time webcam gesture control system using MediaPipe landmark-based geometric ratios (scale-invariant, works at variable distances) with a five-gesture set for hands-free media control. Two-layer stability system: 5-frame rolling buffer + 0.7s hold timer with 0.8s cooldown to eliminate false positives.",
    tech: ["Python", "MediaPipe", "OpenCV", "Landmark Classification"],
    githubUrl: "https://github.com/Sai-Teja-Meka",
    featured: false
  },
  {
    title: "3D Interactive Portfolio",
    category: "Creative Engineering",
    description: "Immersive 3D portfolio using React Three Fiber with custom GLSL shaders and GPU particle systems. Integrated AI terminal for natural language Q&A about skills and experience.",
    tech: ["React Three Fiber", "GLSL", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Advanced_UI",
    demoUrl: "https://advanced-ui-iota.vercel.app/",
    imageUrl: "https://raw.githubusercontent.com/Sai-Teja-Meka/Agent-Persona-Engine/main/preview.png",
    featured: false
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    title: "Satirical Multi-Agent Escalation Dashboard",
    event: "ClawHack / MischiefClaw",
    description: "Built a satirical multi-agent escalation dashboard with dark UI, live Mission Control feed, and multi-agent cascade. Single-file architecture with persistent state management.",
    tech: ["Multi-Agent", "React", "State Management"]
  },
  {
    title: "Metacognitive Depth Probe",
    event: "Kaggle – Measuring Progress Toward AGI",
    description: "Designed a 60-question benchmark with ECE scoring and a fabricated-question tier as key differentiator for measuring AI reasoning depth.",
    tech: ["Benchmark Design", "ECE Scoring", "AI Evaluation"]
  },
  {
    title: "Meta-Reasoning Router",
    event: "NVIDIA Nemotron Reasoning Challenge",
    description: "Built a meta-reasoning router using Reasoning Gym (104 task types) that classifies problems by type before selecting a solving strategy.",
    tech: ["Reasoning Gym", "NVIDIA Nemotron", "Task Classification"]
  },
  {
    title: "Fractal Form: Adaptive AI Interviewer",
    event: "Gemini Live Agent Challenge",
    description: "Shipped an adaptive AI interviewer with branching goal trees, signal density scoring, and cross-session memory using Gemini 2.5 Flash + Live API.",
    tech: ["Gemini 2.5 Flash", "Live API", "Cross-session Memory"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Business Analytics and Project Management",
    institution: "University of Connecticut",
    location: "Hartford, CT",
    year: "Aug 2023 – May 2025",
    focus: "Data Science & AI Systems"
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "VNR VJIET",
    location: "Hyderabad, India",
    year: "Aug 2018 – Jul 2022"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Sep 2025 – Sep 2028"
  },
  {
    title: "IBM AI Foundations (4-course series)",
    issuer: "Coursera / IBM",
    date: "Aug 2020"
  },
  {
    title: "Published LoRA Adapters & Evaluation Datasets",
    issuer: "Hugging Face: SaiTejaMeka45",
    date: "2025"
  }
];

// ============================================
// TYPE GUARDS
// ============================================

export function isExperienceItem(item: any): item is ExperienceItem {
  return item && typeof item === 'object' && 'company' in item && 'id' in item;
}

export function isProjectItem(item: any): item is ProjectItem {
  return item && typeof item === 'object' && 'category' in item && !('company' in item);
}

// ============================================
// DATA TRANSFORMERS
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
      year: "2025",
      description: item.description,
      techStack: item.tech,
      imageUrl: item.imageUrl,
      _source: 'project'
    };
  }
}
