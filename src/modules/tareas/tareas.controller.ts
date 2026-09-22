import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { Tarea } from './entities/tarea.entity';

@Controller('tareas')
export class TareasController {
  constructor(private readonly service: TareasService) {}

  @Get()
  findAll(): Promise<Tarea[]> {
    return this.service.findAll();
  }

  @Get('curso-virtual/:cursoVirtualId')
  findByCursoVirtual(
    @Param('cursoVirtualId', ParseIntPipe) cursoVirtualId: number,
  ): Promise<Tarea[]> {
    return this.service.findByCursoVirtual(cursoVirtualId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Tarea> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Tarea>): Promise<Tarea> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Tarea>,
  ): Promise<Tarea> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}