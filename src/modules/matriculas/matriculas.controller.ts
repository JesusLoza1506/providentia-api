import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { Matricula } from './entities/matricula.entity';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly service: MatriculasService) {}

  @Get()
  findAll(): Promise<Matricula[]> {
    return this.service.findAll();
  }

  @Get('estudiante/:estudianteId')
  findByEstudiante(
    @Param('estudianteId', ParseIntPipe) estudianteId: number,
  ): Promise<Matricula[]> {
    return this.service.findByEstudiante(estudianteId);
  }

  @Get('seccion/:seccionId')
  findBySeccion(
    @Param('seccionId', ParseIntPipe) seccionId: number,
    @Query('anioEscolarId') anioEscolarId?: string,
  ): Promise<Matricula[]> {
    const idAnio = anioEscolarId ? parseInt(anioEscolarId, 10) : undefined;
    return this.service.findBySeccion(seccionId, idAnio);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Matricula> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Matricula>): Promise<Matricula> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Matricula>,
  ): Promise<Matricula> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}