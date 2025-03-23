import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class InputChatMessageDto {
  constructor(partialChatMessageDto: Partial<ChatRequestDto>) {
    Object.assign(this, partialChatMessageDto);
  }

  /**
   * dont want to use the open ai enum but dont want to write new enum...
   * the nerd wants another enum but the builder is tired...
   * if typing annoys me I'll create your damned enum alright!
   */
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'use open ai api roles for the moment...',
    default: 'user',
  })
  role = 'user';

  @IsString()
  @IsNotEmpty()
  message: string;
}

export class ChatRequestDto {
  /**
   * usage:
   *
   * const dto = new ChatRequestDto({
   *   text: "some looooong prompt",
   *   userTag: "李道然"
   * })
   *
   * documentation lies!
   *
   * @param chatRequest
   */
  constructor(chatRequest: Partial<ChatRequestDto>) {
    Object.assign(this, chatRequest);
  }

  /**
   * Message from the consumer of the API
   * formatted with open ai standard...
   */
  @ValidateNested()
  @Type(() => InputChatMessageDto)
  messages: InputChatMessageDto[];

  /**
   * Identifier of the user
   * Use freely
   *
   *
   */
  @IsString()
  @IsOptional()
  userTag = 'anon';
}
