import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ForosService } from './foros.service';
import { Foro } from './entities/foro.entity';

@Controller('foros')
export class ForosController {
  constructor(private readonly service: ForosService) {}

  @Get()
  findAll(): Promise<Foro[]> {
    return this.service.findAll();
  }

  @Get('curso-virtual/:cursoVirtualId')
  findByCursoVirtual(@Param('cursoVirtualId', ParseIntPipe) cursoVirtualId: number): Promise<Foro[]> {
    return this.service.findByCursoVirtual(cursoVirtualId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Foro> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Foro>): Promise<Foro> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Foro>): Promise<Foro> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}