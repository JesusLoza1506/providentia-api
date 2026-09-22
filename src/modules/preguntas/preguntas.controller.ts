import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { Pregunta } from './entities/pregunta.entity';

@Controller('preguntas')
export class PreguntasController {
  constructor(private readonly service: PreguntasService) {}

  @Get()
  findAll(): Promise<Pregunta[]> {
    return this.service.findAll();
  }

  @Get('examen/:examenId')
  findByExamen(@Param('examenId', ParseIntPipe) examenId: number): Promise<Pregunta[]> {
    return this.service.findByExamen(examenId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Pregunta> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Pregunta>): Promise<Pregunta> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Pregunta>,
  ): Promise<Pregunta> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}