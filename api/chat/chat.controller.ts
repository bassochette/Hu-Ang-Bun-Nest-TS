import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatRequestDto } from './chat-request.dto';
import { ChatResponseDto } from './chat-response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('chat')
@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  chatCompletion(
    @Body() chatRequestDto: ChatRequestDto,
  ): Promise<ChatResponseDto> {
    return this.chatService.chat(chatRequestDto);
  }
}
