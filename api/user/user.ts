import { Exclude } from "class-transformer";
import { IsEmail, IsString, IsUUID } from "class-validator";

export class User {
   constructor(
    user: Partial<User>
   ) {
    Object.assign(this, user);
   } 

   @IsUUID()
   id: string;


   @IsString()
   name: string;

   @IsEmail()
   email: string;

   @Exclude()
   @IsString()
   passwordHash: string;
}