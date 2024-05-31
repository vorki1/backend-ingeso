import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comentario } from 'src/comentario/entities/comentario.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, In, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Reserva {

  @PrimaryGeneratedColumn()
  @Field(()=>Int)
  id:number;

  @Column({nullable:true})
  @Field({nullable:true})
  descripcion?:string;

  @Column()
  @Field()
  fecha:string

  @Column()
  @Field()
  bloque:string

  @ManyToOne(()=>Usuario,(usuario)=>usuario.reservas,{onDelete:'CASCADE'})
  @Field(()=>Usuario)
  usuario:Usuario;

  @OneToMany(()=>Comentario,(comentario)=>comentario.reserva)
  @Field(()=>[Comentario],{nullable:true})
  comentarios:Comentario[]
}
