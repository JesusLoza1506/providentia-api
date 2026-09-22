import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { GradosService } from './grados.service';
import { Grado } from './entities/grado.entity';

@Controller('grados')
export class GradosController {
  constructor(private readonly gradosService: GradosService) {}

  @Get()
  findAll(): Promise<Grado[]> {
    return this.gradosService.findAll();
  }

  @Get('nivel/:nivelId')
  findByNivel(@Param('nivelId', ParseIntPipe) nivelId: number): Promise<Grado[]> {
    return this.gradosService.findByNivel(nivelId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Grado> {
    return this.gradosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Grado>): Promise<Grado> {
    return this.gradosService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Grado>,
  ): Promise<Grado> {
    return this.gradosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.gradosService.remove(id);
  }
}