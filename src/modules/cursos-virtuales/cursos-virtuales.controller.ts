import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CursosVirtualesService } from './cursos-virtuales.service';
import { CursoVirtual } from './entities/curso-virtual.entity';

@Controller('cursos-virtuales')
export class CursosVirtualesController {
  constructor(private readonly service: CursosVirtualesService) {}

  @Get()
  findAll(): Promise<CursoVirtual[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CursoVirtual> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<CursoVirtual>): Promise<CursoVirtual> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<CursoVirtual>): Promise<CursoVirtual> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}