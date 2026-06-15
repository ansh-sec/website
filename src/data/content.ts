export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  description: string;
  whoItHelps: string[];
  included: string[];
  frequency: string;
  duration: string;
  conditions: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "behavior-therapy",
    name: "Behavior Therapy & ABA",
    icon: "behavior",
    short: "Evidence-based Applied Behavior Analysis for emotional regulation, adaptive skills, and positive change.",
    description:
      "A structured, compassionate approach that helps children understand the connection between their actions and outcomes. Our licensed behavior therapists design individualized programs that build confidence, reduce distress, and strengthen daily functioning — at home, school, and beyond.",
    whoItHelps: [
      "Children with ASD, ADHD, or developmental delays",
      "Families navigating challenging behaviors or meltdowns",
      "Children who struggle with transitions, routines, or social cues",
    ],
    included: [
      "Functional Behavior Assessment (FBA)",
      "Individualized ABA program design",
      "Parent training and coaching",
      "School and home collaboration",
      "Monthly progress review",
    ],
    frequency: "3–5 sessions per week",
    duration: "45–60 minutes per session",
    conditions: ["ASD", "ADHD", "ODD", "Anxiety", "Behavioral challenges"],
  },
  {
    slug: "speech-therapy",
    name: "Speech & Language Development",
    icon: "speech",
    short: "Personalized speech and language therapy to help children communicate with clarity and confidence.",
    description:
      "From first words to complex conversation, our speech-language pathologists work with children on articulation, receptive and expressive language, fluency, social communication, and feeding. Each plan is tailored to the child's developmental stage and family goals.",
    whoItHelps: [
      "Late talkers and children with speech delays",
      "Children with stuttering, articulation, or language disorders",
      "Children on the spectrum with social communication needs",
    ],
    included: [
      "Comprehensive speech-language assessment",
      "Goal-based therapy sessions",
      "Home practice plans for parents",
      "AAC support where appropriate",
      "School coordination",
    ],
    frequency: "2–4 sessions per week",
    duration: "45 minutes per session",
    conditions: ["Speech delay", "Language disorder", "Stuttering", "Apraxia", "ASD"],
  },
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    icon: "occupational",
    short: "Building independence in daily life — fine motor, self-care, focus, and functional play.",
    description:
      "Occupational therapy supports children in mastering the 'jobs' of childhood: writing, dressing, eating, playing, and focusing. Our therapists integrate sensory, motor, and cognitive strategies in natural home and school contexts.",
    whoItHelps: [
      "Children with fine or gross motor delays",
      "Children with sensory processing differences",
      "Children struggling with handwriting, focus, or daily routines",
    ],
    included: [
      "Motor and sensory evaluation",
      "Individualized OT program",
      "Handwriting and self-care training",
      "Sensory diet design",
      "Parent coaching",
    ],
    frequency: "2–4 sessions per week",
    duration: "45–60 minutes per session",
    conditions: ["Motor delay", "SPD", "Dyspraxia", "Handwriting difficulty", "ASD"],
  },
  {
    slug: "special-education",
    name: "Special Education & Academic Support",
    icon: "education",
    short: "One-on-one academic support tailored to each child's learning profile.",
    description:
      "Our special educators design individualized learning plans that meet children where they are. We focus on foundational literacy, numeracy, executive functioning, and exam confidence — always in a calm, encouraging environment.",
    whoItHelps: [
      "Children with learning disabilities (dyslexia, dyscalculia, dysgraphia)",
      "Children with ADHD or attention differences",
      "Children needing curriculum adaptation or remedial support",
    ],
    included: [
      "Academic and cognitive assessment",
      "Individualized Education Plan (IEP)",
      "Curriculum adaptation",
      "Progress reporting to parents and school",
      "Exam preparation strategies",
    ],
    frequency: "3–5 sessions per week",
    duration: "45–60 minutes per session",
    conditions: ["Dyslexia", "Dyscalculia", "ADHD", "Global delay", "Academic underachievement"],
  },
  {
    slug: "sensory-integration",
    name: "Sensory Integration Therapy",
    icon: "sensory",
    short: "Helping children regulate their sensory world for calmer days and deeper engagement.",
    description:
      "Sensory Integration Therapy supports children who are over- or under-responsive to sound, touch, movement, or light. Through structured, playful sensory experiences, we help children build regulation, attention, and body awareness.",
    whoItHelps: [
      "Children with Sensory Processing Disorder",
      "Children on the autism spectrum",
      "Children with anxiety, attention, or regulation concerns",
    ],
    included: [
      "Sensory Profile evaluation",
      "Therapeutic sensory sessions",
      "Home sensory diet design",
      "Parent education",
      "School environment recommendations",
    ],
    frequency: "2–4 sessions per week",
    duration: "45 minutes per session",
    conditions: ["SPD", "ASD", "Anxiety", "Regulation difficulties"],
  },
  {
    slug: "counseling",
    name: "Counseling & Family Support",
    icon: "counseling",
    short: "Emotional support for children, parents, and the whole family system.",
    description:
      "Our counselors offer a safe, confidential space for children and parents to process emotions, build resilience, and strengthen family connection. We integrate play therapy, cognitive-behavioral strategies, and parent coaching.",
    whoItHelps: [
      "Children with anxiety, low mood, or emotional overwhelm",
      "Parents navigating stress, grief, or caregiver burnout",
      "Families going through transitions or sibling dynamics",
    ],
    included: [
      "Child counseling sessions",
      "Parent counseling and coaching",
      "Family sessions as needed",
      "Coping skills toolkit",
      "Referral support if required",
    ],
    frequency: "1–2 sessions per week",
    duration: "50 minutes per session",
    conditions: ["Anxiety", "Low mood", "Grief", "Family stress", "Transitions"],
  },
  {
    slug: "school-readiness",
    name: "School Readiness & Integration",
    icon: "school",
    short: "Preparing children for confident, successful school entry — and supporting them once there.",
    description:
      "From nursery readiness to mainstream integration, we partner with families and schools. Our program develops pre-academic skills, classroom behavior, peer interaction, and self-regulation so children can thrive in their learning environment.",
    whoItHelps: [
      "Children preparing for nursery, KG, or Grade 1",
      "Children returning to mainstream after a break",
      "Schools seeking inclusion support and shadow-teacher guidance",
    ],
    included: [
      "Readiness assessment",
      "Targeted pre-academic and social skills program",
      "Shadow teacher placement (where required)",
      "School consultation and teacher training",
      "Transition planning",
    ],
    frequency: "3–5 sessions per week (program-based)",
    duration: "Program length: 3–12 months",
    conditions: ["School readiness", "Inclusion support", "Transition anxiety"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "Within six months, our son went from two words to full sentences. The team felt like an extension of our family — calm, honest, and deeply skilled.",
    parent: "Ananya R.",
    child: "Parent of a 4-year-old · Speech Therapy",
  },
  {
    quote: "The Guided Growth program changed everything. For the first time, we felt like we had one team coordinating every part of our daughter's care.",
    parent: "Vikram & Priya S.",
    child: "Parents of a 6-year-old · Guided Growth",
  },
  {
    quote: "What I appreciated most was how the therapists involved us. We weren't watching from the sidelines — we were learning alongside our child.",
    parent: "Meera K.",
    child: "Parent of a 5-year-old · Behavior Therapy",
  },
  {
    quote: "The school readiness program gave our son the confidence to walk into Grade 1 without fear. We couldn't be more grateful.",
    parent: "Rohan T.",
    child: "Parent of a 6-year-old · School Readiness",
  },
];

export const METRICS = [
  { value: "800+", label: "Families Served", detail: "Across Delhi NCR" },
  { value: "5+", label: "Years Clinical Excellence", detail: "Evidence-based care" },
  { value: "100%", label: "Licensed Therapists", detail: "Verified credentials" },
  { value: "Doorstep", label: "Delhi NCR Service", detail: "Therapy that comes home" },
];

export const DIFFERENTIATORS = [
  { title: "All Licensed Therapists", text: "Every clinician on our team is credentialed, supervised, and trained in evidence-based practice." },
  { title: "Coordinated Care", text: "One team, one plan. Therapists collaborate across disciplines so progress is cohesive and measurable." },
  { title: "Parent Comfort First", text: "We design programs around your home, schedule, and emotional reality — not the other way around." },
  { title: "Data-Driven Progress", text: "Monthly reviews, measurable goals, and transparent reporting keep families informed and confident." },
  { title: "Flexible Therapy Model", text: "Home-based, hybrid, or clinic — we meet your child where they learn best." },
  { title: "Doorstep Service", text: "In-home therapy across Delhi, Noida, Gurugram, Faridabad, and Ghaziabad." },
];
