import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaModule } from './reserva/reserva.module';
import { ComentarioModule } from './comentario/comentario.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({//Configurado o anclado en graphql
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(),'src/schema.gql')//El Squema se hace automatico
  }),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database:'database.sqlite',
    entities:[__dirname+'/**/*.entity{.ts,.js}'],
    synchronize:true
  }),UsuarioModule, ReservaModule, ComentarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
