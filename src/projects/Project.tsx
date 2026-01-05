export interface Project {
    id: string;
    name: string;
    descriptionPath: string;
  
    action(input: string): Promise<any>;  
    renderResult(result: any): React.ReactNode; 
  }
