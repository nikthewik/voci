import { MediaProfessional, TrainingProgram, Platform } from "./classes";

// Creating some Media Professionals
let professional1: MediaProfessional = new MediaProfessional(
  "Alessia",
  "Rossi",
  "Journalism",
  3,
  ["Books", "Yoga"]
);

let professional2: MediaProfessional = new MediaProfessional(
  "Laura",
  "Verdi",
  "Direction",
  8,
  ["Cinema", "Photography", "Volleyball"]
);

let professional3: MediaProfessional = new MediaProfessional(
  "Giulia",
  "Bianchi",
  "",
  0,
  ["Writing", "Video Editing"]
);

// Creating some Training Programs
let program1: TrainingProgram = new TrainingProgram(
  "Fundamentals of Direction",
  "Training program for aspiring filmmakers and videomakers.",
  "Direction",
  3,
  []
);

let program2: TrainingProgram = new TrainingProgram(
  "Canva: a powerful tool",
  "Learn Canva, the online platform to quickly create quality content.",
  "Canva",
  1,
  []
);

let program3: TrainingProgram = new TrainingProgram(
  "Mentorship",
  "Mentors seeking to guide Juniors in developing their skills.",
  "Mentorship",
  6,
  []
);

// Creating some Platforms
let platform1: Platform = new Platform(
  "Invisible Stars",
  "online",
  "A podcast celebrating remarkable women whose significant accomplishments are often overlooked.",
  ["Podcast"]
);

let platform2: Platform = new Platform(
  "Visionary Media Production",
  "audiovisual",
  "A creative studio specializing in producing compelling visual content for digital platforms, television, and film.",
  ["Documentary", "Short Film", "Interview"]
);

let platform3: Platform = new Platform(
  "The Creative Collective",
  "printed",
  "A curated journal celebrating creativity, showcasing artists' work, stories, and inspiring creativity from diverse backgrounds.",
  ["Article", "Story", "Photo"]
);

// Veryfing the linking logic between Media Professionals, Training Programs, and Publishing Platforms.
console.log("--------------------");

console.log("Professional 1:");
professional1.joinProgram(program2);
program2.addParticipant(professional1);
platform1.publishContent(professional1, "podcast");
platform3.publishContent(professional1, "article");

console.log("--------------------");

console.log("Professional 2:");
professional2.joinProgram(program3);
program3.addParticipant(professional2);
professional2.joinProgram(program2);
program2.addParticipant(professional2);
platform2.publishContent(professional2, "documentary");

console.log("--------------------");

console.log("Professional 3:");
professional3.joinProgram(program1);
program1.addParticipant(professional3);

console.log("--------------------");
