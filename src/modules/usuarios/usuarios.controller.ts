import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string): Promise<Usuario> {
    return this.usuariosService.findByEmail(email);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Usuario>,
  ): Promise<Usuario> {
    return this.usuariosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usuariosService.remove(id);
  }
}