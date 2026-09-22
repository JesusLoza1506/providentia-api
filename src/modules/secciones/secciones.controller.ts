import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { SeccionesService } from './secciones.service';
import { Seccion } from './entities/seccion.entity';

@Controller('secciones')
export class SeccionesController {
  constructor(private readonly seccionesService: SeccionesService) {}

  @Get()
  findAll(): Promise<Seccion[]> {
    return this.seccionesService.findAll();
  }

  @Get('grado/:gradoId/anio/:anioEscolarId')
  findByGradoAndAnio(
    @Param('gradoId', ParseIntPipe) gradoId: number,
    @Param('anioEscolarId', ParseIntPipe) anioEscolarId: number,
  ): Promise<Seccion[]> {
    return this.seccionesService.findByGradoAndAnio(gradoId, anioEscolarId);
  }

  @Get('tutor/:tutorDocenteId')
  findByTutor(
    @Param('tutorDocenteId', ParseIntPipe) tutorDocenteId: number,
  ): Promise<Seccion[]> {
    return this.seccionesService.findByTutor(tutorDocenteId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Seccion> {
    return this.seccionesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Seccion>): Promise<Seccion> {
    return this.seccionesService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Seccion>,
  ): Promise<Seccion> {
    return this.seccionesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.seccionesService.remove(id);
  }
}