import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EntregasTareasService } from './entregas-tareas.service';
import { EntregaTarea } from './entities/entrega-tarea.entity';

@Controller('entregas-tareas')
export class EntregasTareasController {
  constructor(private readonly service: EntregasTareasService) {}

  @Get()
  findAll(): Promise<EntregaTarea[]> {
    return this.service.findAll();
  }

  @Get('tarea/:tareaId')
  findByTarea(@Param('tareaId', ParseIntPipe) tareaId: number): Promise<EntregaTarea[]> {
    return this.service.findByTarea(tareaId);
  }

  @Get('estudiante/:estudianteId')
  findByEstudiante(@Param('estudianteId', ParseIntPipe) estudianteId: number): Promise<EntregaTarea[]> {
    return this.service.findByEstudiante(estudianteId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<EntregaTarea> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<EntregaTarea>): Promise<EntregaTarea> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<EntregaTarea>): Promise<EntregaTarea> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}