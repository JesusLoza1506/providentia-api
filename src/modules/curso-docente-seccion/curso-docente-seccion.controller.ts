import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CursoDocenteSeccionService } from './curso-docente-seccion.service';
import { CursoDocenteSeccion } from './entities/curso-docente-seccion.entity';

@Controller('curso-docente-seccion')
export class CursoDocenteSeccionController {
  constructor(private readonly service: CursoDocenteSeccionService) {}

  @Get()
  findAll(): Promise<CursoDocenteSeccion[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CursoDocenteSeccion> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<CursoDocenteSeccion>,
  ): Promise<CursoDocenteSeccion> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}