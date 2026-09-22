import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { JustificacionesService } from './justificaciones.service';
import { Justificacion } from './entities/justificacion.entity';

@Controller('justificaciones')
export class JustificacionesController {
  constructor(private readonly service: JustificacionesService) {}

  @Get()
  findAll(): Promise<Justificacion[]> {
    return this.service.findAll();
  }

  @Get('asistencia/:asistenciaId')
  findByAsistencia(@Param('asistenciaId', ParseIntPipe) asistenciaId: number): Promise<Justificacion> {
    return this.service.findByAsistencia(asistenciaId);
  }

  @Get('estado/:estado')
  findByEstado(@Param('estado') estado: string): Promise<Justificacion[]> {
    return this.service.findByEstado(estado);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Justificacion> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Justificacion>): Promise<Justificacion> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Justificacion>): Promise<Justificacion> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}