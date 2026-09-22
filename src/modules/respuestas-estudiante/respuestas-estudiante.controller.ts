import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RespuestasEstudianteService } from './respuestas-estudiante.service';
import { RespuestaEstudiante } from './entities/respuesta-estudiante.entity';

@Controller('respuestas-estudiante')
export class RespuestasEstudianteController {
  constructor(private readonly service: RespuestasEstudianteService) {}

  @Get()
  findAll(): Promise<RespuestaEstudiante[]> {
    return this.service.findAll();
  }

  @Get('examen/:examenId/estudiante/:estudianteId')
  findByExamenAndEstudiante(
    @Param('examenId', ParseIntPipe) examenId: number,
    @Param('estudianteId', ParseIntPipe) estudianteId: number,
  ): Promise<RespuestaEstudiante[]> {
    return this.service.findByExamenAndEstudiante(examenId, estudianteId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<RespuestaEstudiante> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante> {
    return this.service.create(data);
  }

  @Post('batch')
  saveBatch(@Body() data: Partial<RespuestaEstudiante>[]): Promise<RespuestaEstudiante[]> {
    return this.service.saveBatch(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<RespuestaEstudiante>,
  ): Promise<RespuestaEstudiante> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}