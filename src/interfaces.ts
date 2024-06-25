// INTERFACES
interface IMediaProfessional {
  name: string;
  surname: string;
  specialization: string;
  experience: number;
  hobbies: string[];

  joinProgram(program: ITrainingProgram): void;
}

interface ITrainingProgram {
  title: string;
  description: string;
  specialization: string;
  duration: number;
  participantsList: IMediaProfessional[];

  addParticipant(professional: IMediaProfessional): void;
}

type PlatformType = "printed" | "online" | "audiovisual";

interface IPlatform {
  name: string;
  type: PlatformType;
  description: string;
  contentCategories: string[];

  publishContent(professional: IMediaProfessional, content: string): void;
}

export { IMediaProfessional, ITrainingProgram, PlatformType, IPlatform };
