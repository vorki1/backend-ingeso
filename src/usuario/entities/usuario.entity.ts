import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Column, Entity, In, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Usuario {

  @PrimaryGeneratedColumn()
  @Field((type)=>Int)
  id:number;

  @Column()
  @Field()
  nick:string;

  @Column({unique:true})
  @Field()
  correo:string;

  @Column()
  @Field()
  password:string;

  @Column({default:'registrado'})
  @Field()
  estado:string;

  @OneToMany(()=>Reserva,(reserva)=>reserva.usuario,{cascade:true})
  @Field(()=>[Reserva],{nullable:true})
  reservas:Reserva[]

}

//@Column({type:'int'}) para definir una columna de tipo int