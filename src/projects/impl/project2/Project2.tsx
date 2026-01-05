// projects/Project2.ts

import { Project } from '../../Project';
import React from 'react';

export class Project2 implements Project {
  id = 'proj2';
  name = 'Proyecto 2';
  descriptionPath = 'proj2.md';

  async action(input: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Proyecto 2 process: ${input}`);
      }, 500);
    });
  }

  renderResult(result: any): React.ReactNode {
    return (
      <div>
        <h2>{this.name}</h2>
        <p>Resultado: {result}</p>
      </div>
    );
  }
}
