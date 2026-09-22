import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './entities/estudiante.entity';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Get()
  findAll(): Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<Estudiante> {
    return this.estudiantesService.findByUsuario(usuarioId);
  }

  @Get('codigo/:codigo')
  findByCodigo(@Param('codigo') codigo: string): Promise<Estudiante> {
    return this.estudiantesService.findByCodigo(codigo);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Estudiante> {
    return this.estudiantesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Estudiante>): Promise<Estudiante> {
    return this.estudiantesService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Estudiante>,
  ): Promise<Estudiante> {
    return this.estudiantesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.estudiantesService.remove(id);
  }
}