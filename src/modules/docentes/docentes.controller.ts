import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { Docente } from './entities/docente.entity';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Get()
  findAll(): Promise<Docente[]> {
    return this.docentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Docente> {
    return this.docentesService.findOne(id);
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<Docente> {
    return this.docentesService.findByUsuario(usuarioId);
  }

  @Post()
  create(@Body() data: Partial<Docente>): Promise<Docente> {
    return this.docentesService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Docente>,
  ): Promise<Docente> {
    return this.docentesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.docentesService.remove(id);
  }
}