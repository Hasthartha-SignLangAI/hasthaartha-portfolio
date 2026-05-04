export const SITE_NAME = "Hasthaartha";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#project-scope", label: "Project Scope" },
  { href: "#milestones", label: "Milestones" },
  { href: "#team", label: "The Team" },
  { href: "#research-achievement", label: "Research Achievement" },
  { href: "#downloads", label: "Downloads" },
  { href: "#contact", label: "Contact Us" },
] as const;

export const MILESTONES = [
  {
    date: "2025-05-10",
    topic: "Project Initiation",
    task: "Finalize team roles, project scope, and initial timeline.",
    status: "completed",
  },
  {
    date: "2025-05-25",
    topic: "Topic Assessment Submission",
    task: "Submit approved topic rationale with problem statement.",
    status: "completed",
  },
  {
    date: "2025-08-18",
    topic: "Proposal Presentation",
    task: "Present methodology, objectives, and expected outcomes.",
    status: "completed",
  },
  {
    date: "2026-01-05",
    topic: "Progress Presentation 1",
    task: "Demonstrate core module implementation and early results.",
    status: "completed",
  },
  {
    date: "2026-03-08",
    topic: "Progress Presentation 2",
    task: "Show integrated system progress and validation updates.",
    status: "completed",
  },
  {
    date: "2026-04-20",
    topic: "Completion of Full System",
    task: "Complete all features, testing, and documentation.",
    status: "completed",
  },
  {
    date: "2026-04-30",
    topic: "Portfolio Launch",
    task: "Publish final portfolio with artifacts and highlights.",
    status: "completed",
  },
  {
    date: "2026-05-04",
    topic: "Final Presentation",
    task: "Deliver final defense and demonstrate full project impact.",
    status: "pending",
  },
  {
    date: "2026-05-08",
    topic: "Research Paper Submission",
    task: "Submit manuscript with findings and references.",
    status: "pending",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Rakindu Marambe",
    role: "Wearable arm-band designer",
    description:
      "Rakindu has over 1 year of industry experience and is interested in the fields of enterprise application development and Internet of Things(IoT)",
    image: "/team/rakindu.jpeg",
    github: "https://github.com/RakinduM",
    linkedin: "https://www.linkedin.com/in/rakindu-marambe-694077276/",
  },
  {
    name: "James Sembukuttiarachchi",
    role: "Hybrid model trainer",
    description:
      "James has over 1 year of industry experience and interested in software development, automation workflows and and LLM technologies",
    image: "/team/James.jpeg",
    github: "https://github.com/JamesSembukuttiarachchi",
    linkedin: "https://www.linkedin.com/in/jamessembukuttiarachchi/",
  },
  {
    name: "Amaya Fernando",
    role: "Edge mobile application developer and integrator",
    description:
      "Amaya has over 1 year of industry experience and is interested in the fields of Quality Engineering and AI technologies",
    image: "/team/Amaya.jpg",
    github: "https://github.com/amaya2509",
    linkedin: "https://www.linkedin.com/in/amayafernando25/",
  },
  {
    name: "Hiruni Fernando",
    role: "Personalization developer using Few Shot Learning",
    description:
      "Hiruni has nearly 1 year of industry experience and passionate about web development and project management",
    image: "/team/Hiruni.jpg",
    github: "https://github.com/fernandoMHSJ",
    linkedin: "https://www.linkedin.com/in/hiruni-fernandojudez/",
  },
  {
    name: "Dr. Kalpani Manathunga",
    role: "Supervisor | Head of Department",
    description:
      "Pioneer behind the idea and a leading academic in the field of software engineering with expertise in assistive and learning technologies",
    image: "/team/kalpani_madam.jpeg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/kalpani-manathunga-0046ba91/",
  },
  {
    name: "Mr. Jeewaka Perera",
    role: "Co-supervisor",
    description:
      "Senior lecturer with deep expertise in the field of software engineering technologies, machine learning, deep reinforcement learning and neural network architectures.",
    image: "/team/jeewaka_sir.jpeg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/jeewakaperera/",
  },
  {
    name: "Mr. Sanka Mohottala",
    role: "Academic Instructor",
    description:
      "Passionate interest about research and development in the intersection of science and engineering",
    image: "/team/sanka_sir.jpeg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/sankamohottala/",
  },
] as const;

export const PROJECT_SCOPE_SUBSECTIONS = [
  {
    id: "literature-review",
    title: "Literature Review",
    body:
      "Sign language recognition systems are broadly categorized into vision-based and sensor-based approaches [1], [4]. Vision-based systems using cameras and deep learning models such as CNNs have shown promising results [5] but are highly dependent on lighting conditions, camera positioning, and background complexity. In contrast, sensor-based approaches using wearable devices, particularly Electromyography (EMG) and Inertial Measurement Units (IMU), provide more robust and privacy-preserving solutions [2], [6]. Recent studies highlight the effectiveness of combining multimodal sensor data with deep learning models such as CNN-LSTM for capturing both spatial and temporal gesture patterns [3], [8]. However, most existing work focuses on widely used sign languages and lacks support for Sinhala Sign Language.",
  },
  {
    id: "research-gap",
    title: "Research Gap",
    body:
      "Despite advancements in gesture recognition, there is a lack of solutions tailored for Sinhala Sign Language. Existing systems rarely combine wearable EMG and IMU sensors with real-time mobile deployment. Additionally, most models require large datasets and do not support personalization for new users [7]. There is also limited research on edge AI deployment for real-time inference in resource-constrained environments. These limitations highlight the need for a system that is portable, accurate, adaptable, and capable of functioning in real-world conditions.",
  },
  {
    id: "research-problem-solution",
    title: "Research Problem and Solution",
    body:
      "The primary problem addressed in this research is the absence of an accessible and reliable real-time translation system for Sinhala Sign Language. Existing methods either depend heavily on visual input or lack adaptability to individual users. To address this, Hasthaartha proposes a wearable-based solution that utilizes EMG and IMU sensors to capture hand and muscle activity. The system streams data via BLE to a mobile application, where a hybrid CNN-LSTM model performs real-time gesture recognition. Additionally, a few-shot learning mechanism enables users to add custom gestures with minimal data, improving usability and personalization [7].",
  },
  {
    id: "research-objectives",
    title: "Research Objectives",
    body:
      "The main objective of this research is to develop a real-time Sinhala sign language translation system using wearable sensors and edge AI. Specific objectives include designing a wearable EMG-IMU data acquisition system, creating a labeled gesture dataset, developing a hybrid CNN-LSTM model for accurate recognition, deploying the model on mobile using ONNX for real-time inference, and implementing a few-shot learning mechanism to support user-defined gestures.",
  },
  {
    id: "methodology",
    title: "Methodology",
    body:
      "The research follows a structured methodology consisting of multiple stages. First, EMG and IMU data are collected using a wearable device with an ESP32 microcontroller. The collected data are preprocessed through normalization and noise reduction techniques [8]. Next, a hybrid CNN-LSTM model is trained to capture spatial and temporal features of gesture data [3]. The trained model is then converted to ONNX format and deployed on a mobile application for real-time inference [9]. A BLE communication pipeline enables continuous data streaming. Finally, a few-shot learning module is integrated to allow the system to recognize new gestures with limited training samples [7].",
  },
  {
    id: "technologies",
    title: "Technologies",
    body:
      "The system integrates multiple technologies across hardware, software, and machine learning domains. The wearable device is built using ESP32, EMG sensors, and an MPU9250 IMU. Data communication is handled via Bluetooth Low Energy (BLE). The mobile application is developed using Flutter [10], and on-device inference is performed using ONNX Runtime [9]. Model development is carried out using Python and TensorFlow. The web-based research portfolio is built using Next.js and Tailwind CSS.",
  },
  {
    id: "references",
    title: "References",
    body:[
      "[1] S. Mitra and T. Acharya, 'Gesture recognition: A survey,' IEEE Transactions on Systems, Man, and Cybernetics, 2007.",
      "[2] X. Chen et al., 'Hand gesture recognition using EMG signals,' IEEE Transactions on Neural Systems, 2019.",
      "[3] A. Graves, 'Supervised Sequence Labelling with Recurrent Neural Networks,' Springer, 2012.",
      "[4] W. Zhang, J. Liu, and M. Chen, “Wearable sensors for sign language recognition: A comprehensive survey,” IEEE Sensors Journal, vol. 24, no. 5, pp. 850–868, 2024.",
      "[5] O. Koller, J. Forster, and H. Ney, “Continuous sign language recognition: Towards large vocabulary statistical recognition systems,” in Computer Vision and Image Understanding, vol. 141, 2015, pp. 108–125.",
      "[6] R. Hughes and E. Brown, “Design principles for wearable emg-imu systems,” IEEE Transactions on Biomedical Engineering, vol. 70, no. 8, pp. 2345–2359, 2023.",
      "[7] C. Barnes and J. Fisher, “Few-shot learning dataset requirements for biosignal recognition,” Machine Learning, vol. 113, no. 2, pp. 1234–1256, 2024.",
      "[8] W. Stevens and C. Porter, “Signal segmentation techniques for gesture recognition,” in IEEE International Conference on Acoustics, Speech and Signal Processing, 2023, pp. 1–5.",
      "[9] ONNX Runtime Documentation. https://onnxruntime.ai",
      "[10] Flutter Documentation. https://flutter.dev",
    ]
  },
] as const;

export const ACHIEVEMENTS = {
  featured: {
    status: "Research Paper Accepted",
    title: "International Conference Acceptance",
    subtitle:
      "Our research has been accepted for presentation at ICDAM 2026",

    paper: {
      id: "ICDAM-2026-XXX",
      title:
        "Hasthaartha: Real-Time Sinhala Sign Language Translation Using Wearable EMG and Edge AI",
    },

    details: [
      {
        title: "Conference",
        desc: "ICDAM 2026 – International Conference on Data Analytics and Management",
      },
      {
        title: "Index",
        desc: "Indexed by Scopus",
      },
      {
        title: "Venue & Dates",
        desc: "12 – 14 June 2026, London Metropolitan University (UK)",
      },
      {
        title: "Website",
        desc: "https://www.icdam-conf.com/",
      },
    ],
  },

  secondary: [
    {
      title: "SLASSCOM Ingenuity Awards 2026",
      status: "Submission",
      desc: "Submitted to Sri Lanka’s national innovation competition, highlighting the real-world impact and innovation of Hasthaartha.",
    },
  ],
} as const;

export const DOWNLOADS = {
  documents: [
    { title: "Topic Assessment", audience: "Group", href: "https://drive.google.com/drive/folders/1cmmw2jTg6qGTe7SbL7BCKPA9tM6MK1b9?usp=drive_link" },
    { title: "Project Proposal Report", audience: "Individual", href: "https://drive.google.com/drive/folders/1ZzPmckb4dJpNYBMheO-MwwYuB3XwaQlL?usp=drive_link" },
    { title: "Final Report", audience: "Both", href: "https://drive.google.com/drive/folders/19S5CEYk08eZVGeZvWWMiJitviaygwSd0?usp=drive_link" },
    { title: "Research Paper (Camera-ready)", audience: "Individual", href: "https://drive.google.com/drive/folders/11TeOdxM90ry5osk_UyyqNjlNglHFSv1N?usp=drive_link" },
  ],
  presentations: [
    { title: "Proposal Presentation Slides", audience: "Individual", href: "https://drive.google.com/drive/folders/15R2qXvslxC-YGZlNCLZzw1JVSbvYmb1K?usp=drive_link" },
    { title: "Progress Presentation 1 Slides", audience: "Group", href: "https://drive.google.com/drive/folders/1Hn-tQJM5McAxY7am7WntY3RlZhqBAqwe?usp=drive_link" },
    { title: "Progress Presentation 2 Slides", audience: "Group", href: "https://drive.google.com/drive/folders/1CdWYbFbiw5yphBiEBRfwrNrxeJMStIqO?usp=drive_link" },
    { title: "Final Presentation Slides", audience: "Group", href: "https://drive.google.com/drive/folders/1qSar2gh1Vx3JwD9BMdhnewwzFrnObr-u" },
  ],
} as const;
