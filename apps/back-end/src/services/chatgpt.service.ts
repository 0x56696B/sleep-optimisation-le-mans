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
    const prompt = `
      Here is json data regarding a team that will race in the next 24hours:
      The team has drivers, which need to swap. The idea is to utilise the max potential from every single one, while minimising the risk of any driver being too tired and potentially crashing. I want you to optimise me their sleep schedule before the race, based on the provided info in the JSON. How much to sleep and when before the race they should wake up. Also include the strategy they have to rotate drivers, including information on how much each driver could potentially race to optimise the least driver swaps, while utilising each driver's peek energy
      ${JSON.stringify(team)}
    `;

    console.log({ prompt });

    return prompt;
  }
}
