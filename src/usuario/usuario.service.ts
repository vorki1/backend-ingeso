import { Injectable } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario) private usuarioRepository:Repository<Usuario>){}

  create(createUsuarioInput: CreateUsuarioInput) {//Listo
    const newUsuario = this.usuarioRepository.create(createUsuarioInput)
    return this.usuarioRepository.save(newUsuario);
  }

  findAll():Promise<Usuario[]> {//Listo
    return this.usuarioRepository.find({ relations: ['reservas','reservas.comentarios'] });
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where:{
        id
      },relations:['reservas','reservas.comentarios']
    });
  }

  update(id: number, updateUsuarioInput: UpdateUsuarioInput) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
