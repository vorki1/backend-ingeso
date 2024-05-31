import { Injectable } from '@nestjs/common';
import { CreateReservaInput } from './dto/create-reserva.input';
import { UpdateReservaInput } from './dto/update-reserva.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class ReservaService {
  constructor(
  @InjectRepository(Reserva) 
  private reservaRepository:Repository<Reserva>,
  @InjectRepository(Usuario)
  private usuarioRepository:Repository<Usuario>){}
  
    async create(createReservaInt: CreateReservaInput): Promise<Reserva> {
    const {usuarioId } = createReservaInt;
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where:{
        id:usuarioId
      }
    });

    if (!usuarioEncontrado) {
      throw new Error('Usuario no encontrado');
    }

    const reserva = this.reservaRepository.create(createReservaInt)
    reserva.usuario = usuarioEncontrado;

    return this.reservaRepository.save(reserva);
  }

  findAll() {
    return this.reservaRepository.find({ relations: ['usuario', 'comentarios'] });
  }

  findOne(id: number) {
    return this.reservaRepository.findOne({
      where:{
        id
      },relations:['usuario','comentarios']
    });
  }  

  update(id: number, updateReservaInput: UpdateReservaInput) {
    return `This action updates a #${id} reserva`;
  }

  remove(id: number) {
    return `This action updates a #${id} reserva`;
  }

}
