import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { NotasService } from './notas.service';
import { Nota } from './entities/nota.entity';

@Controller('notas')
export class NotasController {
  constructor(private readonly service: NotasService) {}

  @Get()
  findAll(): Promise<Nota[]> {
    return this.service.findAll();
  }

  @Get('matricula/:matriculaId')
  findByMatricula(@Param('matriculaId', ParseIntPipe) matriculaId: number): Promise<Nota[]> {
    return this.service.findByMatricula(matriculaId);
  }

  @Get('curso/:cursoId/periodo/:periodoAcademicoId')
  findByCursoAndPeriodo(
    @Param('cursoId', ParseIntPipe) cursoId: number,
    @Param('periodoAcademicoId', ParseIntPipe) periodoAcademicoId: number,
  ): Promise<Nota[]> {
    return this.service.findByCursoAndPeriodo(cursoId, periodoAcademicoId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Nota> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Nota>): Promise<Nota> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Nota>): Promise<Nota> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}