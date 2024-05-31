import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateComentarioInput {
  
  @Field()
  comentario:string

  @IsInt()
  @Field()
  puntuacion:number

  @IsNotEmpty()
  @IsInt()
  @Field(type=>Int)
  reservaId:number
}
