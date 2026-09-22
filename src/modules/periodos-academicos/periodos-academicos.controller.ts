import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PeriodosAcademicosService } from './periodos-academicos.service';
import { PeriodoAcademico } from './entities/periodo-academico.entity';

@Controller('periodos-academicos')
export class PeriodosAcademicosController {
  constructor(private readonly service: PeriodosAcademicosService) {}

  @Get()
  findAll(): Promise<PeriodoAcademico[]> {
    return this.service.findAll();
  }

  @Get('anio-escolar/:anioEscolarId')
  findByAnioEscolar(
    @Param('anioEscolarId', ParseIntPipe) anioEscolarId: number,
  ): Promise<PeriodoAcademico[]> {
    return this.service.findByAnioEscolar(anioEscolarId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PeriodoAcademico> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<PeriodoAcademico>,
  ): Promise<PeriodoAcademico> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}