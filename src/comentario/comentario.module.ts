import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioResolver } from './comentario.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { ReservaModule } from 'src/reserva/reserva.module';

@Module({
  imports:[TypeOrmModule.forFeature([Comentario,Reserva]),ReservaModule],
  providers: [ComentarioResolver, ComentarioService],
})
export class ComentarioModule {}
