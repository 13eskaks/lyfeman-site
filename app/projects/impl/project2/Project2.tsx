// projects/Project1.ts

import { Project } from '../../Project';

export class Project2 implements Project {
  id = 'proj2';
  name = 'Proyecto 2';
  descriptionPath = 'proj2.md';

  action(input: string): string {
    return `Proyecto 2 process: ${input}`;
  }
}
