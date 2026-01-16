import { Brain, Database, Globe, Cpu, Cloud, Layers } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Sai Teja Meka",
  role: "AI Systems Architect & Data Scientist",
  location: "New Jersey, USA",
  email: "saitejameka45usa@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-teja-meka-b336211b6", 
  github: "https://github.com/Sai-Teja-Meka",
  [cite_start]// Updated Bio from Resume Summary [cite: 112, 113]
  bio: "Production AI builder with 1+ years of experience engineering LLM systems, multi-agent orchestration, and full-stack AI applications. Specializing in deploying RAG pipelines (85% consistency) and translating research into shipped products.",
  status: "Open to Work • AI Engineer Intern"
};

export const SKILLS = [
  [cite_start]// Refined based on Resume Skills section [cite: 115, 116, 117, 118, 119]
  { 
    category: "AI & Agents", 
    icon: Brain, 
    items: ["Multi-Agent Systems", "RAG Pipelines", "LangChain", "CrewAI", "ChromaDB", "Pinecone"] 
  },
  { 
    category: "LLM Engineering", 
    icon: Cpu, 
    items: ["Prompt Engineering", "Model Evaluation", "Fine-tuning", "Embeddings", "OpenAI/Anthropic APIs"] 
  },
  { 
    category: "Full Stack & Cloud", 
    icon: Cloud, 
    items: ["FastAPI", "Next.js", "React", "AWS (Lambda/S3)", "GCP Vertex AI", "Docker"] 
  },
  { 
    category: "Data & Core", 
    icon: Database, 
    items: ["Python", "SQL", "PyTorch", "TensorFlow", "Scikit-learn", "Real-time Streaming"] 
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    year: "Sep 2025 - Present",
    title: "AI Engineer Intern",
    company: "Cloud Bridge Solutions Inc",
    [cite_start]// [cite: 143, 144]
    description: "Architected an enterprise AI education platform with microservices. Built a RAG engine using Pinecone achieving sub-250ms retrieval and 92% relevance. Developed AI lesson planners and adaptive testing modules.",
    tech: ["Python", "RAG", "Pinecone", "MongoDB", "Flask", "Microservices"]
  },
  {
    id: 2,
    year: "Aug 2024 - Dec 2024",
    title: "Data Science Consultant",
    company: "PepsiCo (Capstone)",
    [cite_start]// [cite: 147]
    description: "Developed predictive ML models optimizing packaging performance. Built statistical simulations that accelerated R&D decision velocity by 25%.",
    tech: ["Predictive Modeling", "Statistical Simulation", "Python"]
  },
  {
    id: 3,
    year: "July 2022 - July 2023",
    title: "Data Analyst",
    company: "Savant Instruments",
    [cite_start]// [cite: 150, 151]
    description: "Engineered real-time Power BI dashboards reducing reporting overhead by 40%. Built forecasting engines improving prediction accuracy by 25%.",
    tech: ["Power BI", "SQL", "ETL Pipelines", "Forecasting"]
  }
];

export const PROJECTS = [
  {
    title: "Deep Blue AI Platform",
    category: "Multi-Agent System",
    [cite_start]// [cite: 123, 124, 125]
    description: "Production-grade orchestration system coordinating 5+ agents (research, coding, email). Features a RAG-powered memory system (ChromaDB) with sub-200ms latency, FastAPI backend with JWT auth, and a Next.js real-time voice interface.",
    tech: ["FastAPI", "Next.js", "ChromaDB", "WebSockets", "RAG"],
    githubUrl: "#", 
    demoUrl: "#",   
    featured: true
  },
  {
    title: "LLM Content Classification",
    category: "AI Safety",
    [cite_start]// [cite: 129, 130]
    description: "Agent-driven content moderation pipeline using GPT-4 and Claude. Achieved 85% consistency with human review via few-shot prompting and chain-of-thought reasoning.",
    tech: ["GPT-4", "Claude", "LangChain", "Evaluation Frameworks"],
    githubUrl: "https://github.com/Sai-Teja-Meka/Content_Moderator-Guardian-AI-",
    demoUrl: "https://contentmoderator.streamlit.app/",
    featured: true
  },
  {
    title: "ScholarGPT",
    category: "EdTech AI",
    [cite_start]// [cite: 134, 135]
    description: "Modular study platform leveraging CrewAI to orchestrate specialized agents. Features browser-native workflows with Web Speech API for voice-driven notes and flashcard generation.",
    tech: ["CrewAI", "Web Speech API", "Agent Orchestration"],
    link: "#",
    featured: true
  },
  {
    title: "AI Resource Optimization",
    category: "Predictive Simulation",
    [cite_start]// [cite: 139]
    description: "Probabilistic forecasting simulator modeling renewable energy generation. Uses ML-enhanced algorithms to balance resources under variable weather conditions.",
    tech: ["NumPy", "Scikit-learn", "Streamlit", "Predictive Modeling"],
    link: "#",
    featured: false
  }
];
