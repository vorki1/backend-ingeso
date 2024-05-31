import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaResolver } from './reserva.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Comentario } from 'src/comentario/entities/comentario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Reserva,Usuario,Comentario],),UsuarioModule],
  providers: [ReservaResolver, ReservaService],
})
export class ReservaModule {}
