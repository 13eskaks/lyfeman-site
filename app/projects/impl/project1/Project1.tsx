import { apiRawClient } from '../../../lib/apiClient';
import { Project } from '../../Project';

export class Project1 implements Project {
  id = 'proj1';
  name = 'Proyecto 1';
  descriptionPath = 'proj1.md';

  async action(input: string): Promise<string> {
    try {
      const rawText = await apiRawClient({ endpoint: 'https://raw.githubusercontent.com/13eskaks/GuiaDeepLearning/refs/heads/main/ElQuijote.txt' });
        const text = await rawText.text();


      return `${text.substring(0, 100)}`;
    } catch (error: any) {
      return `Error al obtener el texto: ${error.message}`;
    }
  }
}
