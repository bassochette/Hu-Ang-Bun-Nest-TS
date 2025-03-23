import { Injectable } from '@angular/core';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { InternalServerErrorException, Logger } from '@nestjs/common';

@Injectable()
export class TextToSpeechService {
  openAIClient: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.openAIClient = new OpenAI({
      apiKey: configService.get('OPENAI_API_KEY'),
    });
  }

  async textToSpeech(text: string) {
    const response = await this.openAIClient.audio.speech.create({
      voice: 'fable',
      model: 'gpt-4o-mini-tts',
      input: text,
      response_format: 'mp3',
    });

    if (!response.ok) {
      Logger.error(await response.text(), TextToSpeechService.name);
      throw new InternalServerErrorException(response.text());
    }

    response.body;
  }
}
