import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { config } from 'src/config';

@Injectable()
export class ChatGptService {
  private readonly aiClient: OpenAI;

  constructor() {
    const aiConfig = {
      apiKey: config().ai.apiKey,
    };

    this.aiClient = new OpenAI(aiConfig);
  }

  async sendTextToAI(prompt: string): Promise<string> {
    try {
      const completion = await this.aiClient.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 4000,
      });

      console.log({ completion });

      return 'a';
    } catch (error) {
      console.error({ error });

      throw new HttpException(
        'Failed to fetch data from AI',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
