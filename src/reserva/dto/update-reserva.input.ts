import { CreateReservaInput } from './create-reserva.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReservaInput extends PartialType(CreateReservaInput) {
  @Field(() => Int)
  id: number;
}
