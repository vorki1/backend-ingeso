import { InputType, Int, Field } from '@nestjs/graphql';
import { IsIn, IsInt, IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateReservaInput {
  
  
  @Field({nullable:true})
  descripcion?:string

  @Field()
  fecha:string;

  @Field()
  bloque:string;

  @IsNotEmpty()
  @IsInt()
  @Field(type=>Int)
  usuarioId:number
}
