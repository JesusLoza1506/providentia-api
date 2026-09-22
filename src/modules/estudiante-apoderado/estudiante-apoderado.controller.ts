import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EstudianteApoderadoService } from './estudiante-apoderado.service';
import { EstudianteApoderado } from './entities/estudiante-apoderado.entity';

@Controller('estudiante-apoderado')
export class EstudianteApoderadoController {
  constructor(private readonly service: EstudianteApoderadoService) {}

  @Get()
  findAll(): Promise<EstudianteApoderado[]> {
    return this.service.findAll();
  }

  @Get('estudiante/:estudianteId')
  findByEstudiante(@Param('estudianteId', ParseIntPipe) estudianteId: number): Promise<EstudianteApoderado[]> {
    return this.service.findByEstudiante(estudianteId);
  }

  @Get('apoderado/:apoderadoId')
  findByApoderado(@Param('apoderadoId', ParseIntPipe) apoderadoId: number): Promise<EstudianteApoderado[]> {
    return this.service.findByApoderado(apoderadoId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<EstudianteApoderado> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<EstudianteApoderado>,
  ): Promise<EstudianteApoderado> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}