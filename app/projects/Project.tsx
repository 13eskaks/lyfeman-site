export interface Project {
    id: string;
    name: string;
    descriptionPath?: string;
    action: (input: string) => Promise<string> | string;
}
