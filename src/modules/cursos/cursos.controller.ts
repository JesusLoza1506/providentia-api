import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';

@Controller('cursos')
export class CursosController {
  constructor(private readonly service: CursosService) {}

  @Get()
  findAll(): Promise<Curso[]> {
    return this.service.findAll();
  }

  @Get('nivel/:nivelId')
  findByNivel(@Param('nivelId', ParseIntPipe) nivelId: number): Promise<Curso[]> {
    return this.service.findByNivel(nivelId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Curso> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Curso>): Promise<Curso> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Curso>,
  ): Promise<Curso> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}