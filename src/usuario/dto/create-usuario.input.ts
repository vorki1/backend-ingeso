import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()//Entrada de graphQL
export class CreateUsuarioInput {

  @IsNotEmpty()
  @Field()
  nick:string;

  @IsNotEmpty()
  @Field()
  correo:string;

  @IsNotEmpty()
  @Field()
  password:string;
  
}
