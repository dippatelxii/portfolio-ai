export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I focus on building reliable AI systems, grounded in measurable results. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I work beyond borders, not bound by clocks.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing an NLP chatbot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Data Analyst",
    des: "Leverages artificial intelligence to automate data analysis tasks, turning raw data into meaningful insights.",
    img: "/p1.jpg",
    iconLists: ["/python.svg", "/pytorch.svg", "/lli.svg", "/lg.png", "/numpy.svg"],
    link: "https://github.com/dippatelxii/AIDataAnalyst",
  },
  {
    id: 2,
    title: "Bussiness ChatBot",
    des: "Focuses on building an AI-powered business chatbot that streamlines customer interactions and internal support.",
    img: "/p2.jpg",
    iconLists: ["/python.svg", "/numpy.svg", "/tf.svg", "/hf.svg", "/lc.svg"],
    link: "https://github.com/dippatelxii/BusinessChatbot",
  },
  {
    id: 3,
    title: "Iris Detection",
    des: "Applies computer vision and machine learning techniques to accurately detect and recognize human iris patterns.",
    img: "/p3.jpg",
    iconLists: ["/python.svg", "/hf.svg", "/pytorch.svg", "/tf.svg", "/lg.png"],
    link: "https://github.com/dippatelxii/EyeTrack",
  },
  {
    id: 4,
    title: "Drowsiness Detection",
    des: "Monitor worker alertness by tracking eye closure, yawning, and head movements in real time.",
    img: "/p4.jpg",
    iconLists: ["/python.svg", "/numpy.svg", "/lli.svg", "/pytorch.svg", "/tf.svg"],
    link: "https://github.com/dippatelxii/DrowsinessDetection",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Dip was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dip's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your brand, Patel is the ideal partner.",
    name: "Seguttuvan G",
    title: "Founder, PearlThoughts",
  },
  {
    quote:
      "Working with Dip was a rewarding experience. He approaches data problems with curiosity and precision, always ensuring that the insights are both accurate and practical. His strong grasp of statistical modeling and machine learning, combined with clear communication, made complex results easy to understand and apply. If your goal is to transform raw data into meaningful outcomes, Dip brings both the expertise and dedication to make that happen.",
    name: "Pavithra M",
    title: "Delivery Manager, PearlThoughts",
  },
  {
    quote:
      "Dip’s expertise in statistical modeling and machine learning brought tremendous value to our collaboration. His technical depth, combined with an ability to explain complex ideas simply, made working with him both productive and enjoyable. He doesn’t just analyze numbers—he translates them into strategies that improve performance and create real impact.",
    name: "Ashok Veda",
    title: "Chief Data Scientist, Rubixe",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dippatelxii",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/dippatelxii",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dippatel12/",
  },
];

export const workExperience = [
  {
    id: 1,
    role: "AI Engineer Intern",
    company: "PearlThoughts, Chennai",
    duration: "Apr 2025 - Aug 2025",
    workDetails: [
      "Pioneered a successful chatbot training initiative; as the most junior team member,",
      "personally trained the model on 500+ industry-specific queries, leading to a significant", 
      "improvement in response accuracy. Optimized advanced prompt strategies, enhancing AI model's", 
      "precision across 30+ domains, from finance to customer service, achieving 87% relevance",
      "in generated responses and improving user satisfaction."
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "GCP", "Docker", "Git"]
  },
  {
    id: 2,
    role: "Data Scientist Intern",
    company: "Rubixe, Bangalore",
    duration: "Jun 2024 - Mar 2025",
    workDetails: [
      "Spearheaded the development of a proof of concept for a face detection model using",
      "CNN deep learning technique in Python; achieved 95% accuracy in detecting face within",
      "images, enhancing security measures. •	Elevated projects with hyperparameter tuning",
      "and feature engineering, improving model efficiency and reducing computation time by 30%"
    ],
    tools: ["Python", "R", "SQL", "Tableau", "Scikit-learn", "Pandas"]
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "Technook PVT. LTD, Bangalore",
    duration: "Jan 2022 - Apr 2022",
    workDetails: [
      "Implemented computer vision models for object detection and Worked on natural language",
      "processing tasks using transformers. Participated in model optimization and hyperparameter",
      "tuning also Contributed to research papers on deep learning applications."
    ],
    tools: ["Python", "Pandas", "scikit-learn", "NumPy", "Matplotlib"]
  },
];
