import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Comentario {
  
  @PrimaryGeneratedColumn()
  @Field(()=>Int)
  id:number

  @Column()
  @Field()
  comentario:string

  @Column()
  @Field()
  puntuacion:number

  @ManyToOne(()=>Reserva,(reserva)=>reserva.comentarios,{onDelete:'CASCADE'})
  @Field(()=>Reserva)
  reserva:Reserva
}
