import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Saksham Gupta",
  title: "Data Scientist and Software Engineer",
  summary:
    "Data Scientist and Software Engineer with 2.5 years of experience in leveraging data to drive fact-based, insight-driven decision-making. Skilled in Software Development, Agile Methodologies, Exploratory Data Analysis, Statistical Analysis, Hypothesis Testing, Sentiment Analysis, NLP, Image Processing, Computer Vision, and Machine Learning.",
  email: "sakshamgupta0798@gmail.com",
  phone: "+1 682-597-5518",
  location: "Arlington, TX",
  aboutMe:
    "I'm passionate about developing innovative data-driven solutions and building efficient software systems. I enjoy working across the stack and leveraging AI technologies to solve complex problems. Outside of work, I like hiking, exploring new tech trends, and experimenting with photography.",
  skills: [
    { name: "Python", level: 90, category: "Languages" },
    { name: "Java", level: 85, category: "Languages" },
    { name: "C", level: 80, category: "Languages" },
    { name: "PHP", level: 75, category: "Languages" },
    { name: "C++", level: 80, category: "Languages" },
    { name: "MongoDB", level: 80, category: "DataBase" },
    { name: "Firebase", level: 75, category: "DataBase" },
    { name: "MySQL", level: 75, category: "DataBase" },
    { name: "PostgreSQL", level: 70, category: "DataBase" },
    { name: "Django", level: 80, category: "backend" },
    { name: "Flask", level: 75, category: "backend" },
    { name: "FastAPI", level: 75, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Spring Boot", level: 70, category: "backend" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Google Cloud", level: 65, category: "Cloud" },
    { name: "Azure", level: 65, category: "Cloud" },
    { name: "Docker", level: 70, category: "Devops" },
    { name: "Kubernetes", level: 60, category: "Devops" },
    { name: "Terraform", level: 60, category: "Devops" },
    { name: "TensorFlow", level: 80, category: "ai" },
    { name: "PyTorch", level: 75, category: "ai" },
    { name: "Scikit-Learn", level: 80, category: "ai" },
    { name: "OpenCV", level: 75, category: "ai" },
    { name: "Hugging Face", level: 70, category: "ai" },
    { name: "Apache Spark", level: 70, category: "Big Data" },
    { name: "Hadoop", level: 65, category: "Big Data" },
    { name: "Kafka", level: 65, category: "Big Data" },
    { name: "Airflow", level: 65, category: "Big Data" },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "The University of Texas at Arlington",
      location: "Arlington, TX",
      startDate: "2023",
      endDate: "2025",
      description: "CGPA: 3.6/4. Coursework included Data Science, Software Engineering, Machine Learning, and Cloud Computing."
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Mukesh Patel School of Technology Management and Engineering, NMIMS University",
      location: "Mumbai, India",
      startDate: "2016",
      endDate: "2020",
      description: "Graduated with First Class. Specialized in Software Development and Data Analytics."
    }
  ],
  experience: [
    {
      title: "Data Scientist Intern",
      company: "Sparkle Gems Inc.",
      location: "New York, USA",
      startDate: "Feb 2025",
      endDate: "Present",
      description: "Sales forecasting, customer segmentation, and inventory optimization using machine learning models.",
      responsibilities: [
        "Boosted sales by 30% using XGBoost and ARIMA models",
        "Enhanced marketing ROI by 25% through clustering and A/B testing",
        "Developed LSTM forecasting tool reducing stock inefficiencies by 15%"
      ]
    },
    {
      title: "Associate Software Developer - Machine Learning and Web Development",
      company: "DIBC",
      location: "Mumbai, India",
      startDate: "Jun 2022",
      endDate: "Jun 2023",
      description: "Web development and ML model building for business intelligence.",
      responsibilities: [
        "Boosted website performance by 40% using Django, PHP, and Python",
        "Improved forecasting accuracy by 25% through machine learning",
        "Accelerated project delivery by 20% with Agile methodologies"
      ]
    },
    {
      title: "Systems Engineer - Data and Analytics",
      company: "Infosys Limited",
      location: "Pune, India",
      startDate: "Jan 2021",
      endDate: "Apr 2022",
      description: "Data management and analytics for global supply chain and finance data.",
      responsibilities: [
        "Achieved 50% efficiency improvement in data delivery",
        "Ensured 30% improved decision-making by enhancing data accuracy",
        "Handled large datasets using SAP BODS, Teradata, and Power BI"
      ]
    }
  ],
  projects: [
    {
      id: "project1",
      title: "LLM-Powered YouTube Assistant",
      description: "An LLM-powered Streamlit assistant that processes YouTube videos using transcript extraction (via API, Whisper, or subtitles), embeds them into Pinecone, and enables real-time Q&A through a Mistral model from Hugging Face.",
      imageUrl: "images/youtube-llm.png",
      tags: ["Python", "Streamlit", "Whisper","Mistral"],
      liveUrl: "https://github.com/saksham-gupta07/llm",
      codeUrl: "",
      featured: true
    },
    {
      id: "project2",
      title: "Computer Aided Diagnostic System for Lung Cancer Detection",
      description: "Boosted diagnostic accuracy by 70% using a fuzzy probabilistic C-means algorithm and SVM classification.",
      imageUrl: "images/cancer-diagnostics.png",
      tags: ["Machine Learning", "Computer Vision", "Medical AI"],
      liveUrl: "https://github.com/saksham-gupta07/Computer-Aided-Lung-Cancer-Detection-",
      codeUrl: "",
      featured: true
    },
    {
      id: "project3",
      title: "Black Peafowl - Hexacopter",
      description: "Designed an autonomous hexacopter capable of real-time coordinate flight, using Tarot X6, T-motor MN5212, and Pixhawk 2.1.",
      imageUrl: "images/blackpeafowl.png",
      tags: ["Robotics", "Embedded Systems", "Drones"],
      liveUrl: "https://drive.google.com/drive/folders/1OBSPKXaNaMzeNuZETj2ZkcuBc8K-a2vH",
      codeUrl: "",
      featured: false
      
    },
    {
      id: "project4",
      title: "Sentiment Analysis Using BERT",
      description: "Developed a sentiment analysis pipeline combining rule-based (VADER) and transformer-based (BERT) methods, involving text preprocessing, visualization, and fine-tuning BERT for multi-class sentiment classification using Hugging Face Transformers",
      imageUrl: "images/sentiment-analysis.png",
      tags: ["Machine Learning", "NLP", "Medical AI"],
      liveUrl: "https://github.com/saksham-gupta07/Sentiment-Analysis",
      codeUrl: "",
      featured: true
    }
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saksham-gupta07/",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:sakshamgupta0798@gmail.com",
      icon: "Mail"
    }
  ]
};
