import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { Horario } from './entities/horario.entity';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly service: HorariosService) {}

  @Get()
  findAll(): Promise<Horario[]> {
    return this.service.findAll();
  }

  @Get('curso-docente-seccion/:cursoDocenteSeccionId')
  findByCursoDocenteSeccion(
    @Param('cursoDocenteSeccionId', ParseIntPipe) cursoDocenteSeccionId: number,
  ): Promise<Horario[]> {
    return this.service.findByCursoDocenteSeccion(cursoDocenteSeccionId);
  }

  @Get('aula-fisica/:aulaFisicaId')
  findByAulaFisica(@Param('aulaFisicaId', ParseIntPipe) aulaFisicaId: number): Promise<Horario[]> {
    return this.service.findByAulaFisica(aulaFisicaId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Horario> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Horario>): Promise<Horario> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Horario>,
  ): Promise<Horario> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}