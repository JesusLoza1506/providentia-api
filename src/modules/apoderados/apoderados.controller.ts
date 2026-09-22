import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApoderadosService } from './apoderados.service';
import { Apoderado } from './entities/apoderado.entity';

@Controller('apoderados')
export class ApoderadosController {
  constructor(private readonly apoderadosService: ApoderadosService) {}

  @Get()
  findAll(): Promise<Apoderado[]> {
    return this.apoderadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Apoderado> {
    return this.apoderadosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Apoderado>): Promise<Apoderado> {
    return this.apoderadosService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Apoderado>,
  ): Promise<Apoderado> {
    return this.apoderadosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.apoderadosService.remove(id);
  }
}