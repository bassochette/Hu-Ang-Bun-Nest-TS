/**
 * Returned from any AI provider
 * As of today 20250323 open AI and looking for local model or something under my control
 */
export class ChatResponseDto {
  constructor(chatResponseDto?: Partial<ChatResponseDto>) {
    Object.assign(this, ChatResponseDto);
  }

  /**
   * what did he say? what did he say?
   * Isn't it a Beastie boys song?
   */
  text: string;
}
