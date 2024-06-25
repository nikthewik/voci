import {
  IMediaProfessional,
  ITrainingProgram,
  PlatformType,
  IPlatform,
} from "./interfaces";

// CLASSES
class MediaProfessional implements IMediaProfessional {
  constructor(
    public name: string,
    public surname: string,
    public specialization: string,
    public experience: number,
    public hobbies: string[]
  ) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.experience = experience;
    this.hobbies = hobbies;
  }

  joinProgram(program: ITrainingProgram): void {
    switch (program.specialization) {
      case "Mentorship":
        console.log(
          `${this.name} ${this.surname} will join the "${program.specialization}" training program as a Mentor.`
        );
        break;
      default:
        console.log(
          `${this.name} ${this.surname} will join the "${program.specialization}" training program.`
        );
    }
  }
}

class TrainingProgram implements ITrainingProgram {
  constructor(
    public title: string,
    public description: string,
    public specialization: string,
    public duration: number,
    public participantsList: IMediaProfessional[]
  ) {
    this.title = title;
    this.description = description;
    this.specialization = specialization;
    this.duration = duration;
    this.participantsList = participantsList;
  }

  addParticipant(professional: IMediaProfessional): void {
    this.participantsList.push(professional);
    console.log(
      `Participants of "${this.title}":${this.participantsList.map((obj, i) => {
        return ` ${obj.name} ${obj.surname}`;
      })}.`
    );
  }
}

class Platform implements IPlatform {
  constructor(
    public name: string,
    public type: PlatformType,
    public description: string,
    public contentCategories: string[]
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.contentCategories = contentCategories;
  }

  publishContent(professional: IMediaProfessional, content: string): void {
    console.log(
      `${professional.name} ${professional.surname} has published ${
        ["a", "e", "i", "o", "u"].indexOf(content[0]) !== -1 ? "an" : "a"
      } ${content} in collaboration with ${this.name}.`
    );
  }
}

export { MediaProfessional, TrainingProgram, Platform };
