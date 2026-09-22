import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CompetenciasService } from './competencias.service';
import { Competencia } from './entities/competencia.entity';

@Controller('competencias')
export class CompetenciasController {
  constructor(private readonly service: CompetenciasService) {}

  @Get()
  findAll(): Promise<Competencia[]> {
    return this.service.findAll();
  }

  @Get('curso/:cursoId')
  findByCurso(@Param('cursoId', ParseIntPipe) cursoId: number): Promise<Competencia[]> {
    return this.service.findByCurso(cursoId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Competencia> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Competencia>): Promise<Competencia> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Competencia>,
  ): Promise<Competencia> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}