import { Injectable } from '@angular/core';
import OpenAI, { ChatCompletionMessageParam } from 'openai';
import { ConfigService } from '@nestjs/config';
import { ChatRequestDto } from './chat-request.dto';
import { ChatResponseDto } from './chat-response.dto';

@Injectable()
export class ChatService {
  openAi: OpenAI;

  constructor(private readonly config: ConfigService) {
    this.openAi = new OpenAI({
      apiKey: config.get('OPENAI_API_KEY'),
    });
  }

  async chat(chatRequest: ChatRequestDto): Promise<ChatResponseDto> {
    return new ChatResponseDto();
  }

  // sendToOpenAI(chatRequestDto: ChatRequestDto): Promise<ChatResponseDto> {
  //   this.openAi.chat.completions.create({
  //     model: 'gpt-4o-mini',
  //     messages: [
  //       {
  //         role: 'assistant',
  //         content: '',
  //         name: '',
  //       },
  //
  //     ],
  //     web_search_options: {
  //       search_context_size: 'low',
  //     },
  //   });
  // }
}
