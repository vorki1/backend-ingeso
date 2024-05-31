import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Reserva } from 'src/reserva/entities/reserva.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario,Reserva],)],
  providers: [UsuarioResolver, UsuarioService],
  exports:[UsuarioService]
})
export class UsuarioModule {}
