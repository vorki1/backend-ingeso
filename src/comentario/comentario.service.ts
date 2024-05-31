import { Injectable } from '@nestjs/common';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { Reserva } from 'src/reserva/entities/reserva.entity';

@Injectable()
export class ComentarioService {
  constructor(
  @InjectRepository(Comentario) 
  private comentarioRepository:Repository<Comentario>,
  @InjectRepository(Reserva)
  private reservaRepository:Repository<Reserva>){}

  async create(createComentarioInput: CreateComentarioInput) {
    const {reservaId} = createComentarioInput;
    const reservaEncontrada = await this.reservaRepository.findOne({
      where:{
        id:reservaId
      },relations:['usuario'],
    })
    if(!reservaEncontrada)
      {
        throw new Error('reserva no encontrado');
      }

    const comentario = this.comentarioRepository.create(createComentarioInput)
    comentario.reserva =reservaEncontrada;

    return this.comentarioRepository.save(comentario);
  }

  findAll() {
    return this.comentarioRepository.find({relations:['reserva','reserva.usuario']});
  }

  findOne(id: number) {
    return this.comentarioRepository.findOne({
      where: {
        id,
      },
      relations: ['reserva','reserva.usuario'],
    });
  }

  update(id: number, updateComentarioInput: UpdateComentarioInput) {
    return `This action updates a #${id} comentario`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentario`;
  }
}
