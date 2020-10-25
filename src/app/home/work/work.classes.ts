export class WorkDetail {
    id: number;
    companyName: string;
    duration: string;
    title: string;
    jobDescription: string[];
    techStack: string[];
    projects: ProjectDetails[];
    logo: string;
}

export class ProjectDetails {
    "projectName": string;
    "description": string;
    "significantContributions": string[];
    "techStack": string[];
}