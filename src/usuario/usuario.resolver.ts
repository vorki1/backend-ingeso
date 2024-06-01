import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => Usuario,{name:'crearUsuario'})//Listo
  createUsuario(@Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput) {
    return this.usuarioService.create(createUsuarioInput);
  }

  @Query(() => [Usuario], { name: 'listarUsuarios' })//Listo
  findAll() {
    return this.usuarioService.findAll();
  }

  @Query(() => Usuario, { name: 'buscarUsuarioPorId' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Mutation(() => Usuario)
  updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput) {
    return this.usuarioService.update(updateUsuarioInput.id, updateUsuarioInput);
  }

  @Mutation(() => Usuario)
  removeUsuario(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioService.remove(id);
  }

  @Mutation(() => Boolean)
  async login(
    @Args('correo') correo: string,
    @Args('password') password: string,
  ): Promise<boolean> {
    return this.usuarioService.validateUser(correo, password);
  }

  @Query(() => Usuario, { nullable: true })
  async getUserByEmail(@Args('correo') correo: string): Promise<Usuario | undefined> {
    return this.usuarioService.findUserByEmail(correo);
  }
}

