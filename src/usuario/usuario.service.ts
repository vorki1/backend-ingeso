import { Injectable } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';


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

  async findUserByEmail(correo: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { correo } });
  }

  update(id: number, updateUsuarioInput: UpdateUsuarioInput) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  //login
  async validateUser(correo: string, password: string): Promise<boolean> {
    console.log('correo enviado:', correo);
    const user = await this.findUserByEmail(correo);
    console.log('Usuario encontrado:', user);
    if (user) {
      const isPasswordMatch = password === user.password;
      console.log('contraseña ingresada:', password);
      console.log('contraseña del usuario:', user.password);
      console.log('Comparación de contraseñas:', isPasswordMatch);
      if (isPasswordMatch) {
        return true;
      }
    }
    return false;
  }
}

