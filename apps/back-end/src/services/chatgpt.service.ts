import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Ollama } from 'ollama';
import { config } from 'src/config';
import { Team } from 'src/models/Team';

@Injectable()
export class AiService {
  private readonly aiClient: Ollama;

  constructor() {
    const aiConfig = {
      apiUrl: config().ai.apiUrl,
    };
    this.aiClient = new Ollama({ host: aiConfig.apiUrl });
  }

  async sendTextToAI(prompt: string): Promise<string> {
    try {
      const response = await this.aiClient.chat({
        model: 'llama2',
        messages: [{ role: 'user', content: prompt }],
      });

      console.log({ prompt, msg: response.message.content });

      return response.message.content;
    } catch (error) {
      console.error({ error });

      throw new HttpException(
        'Failed to fetch data from AI',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createPrompt(team: Team) {
    console.log({ teamData: JSON.stringify(team) });

    return '';
  }
}
