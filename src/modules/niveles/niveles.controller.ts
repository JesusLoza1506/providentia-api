import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { NivelesService } from './niveles.service';
import { Nivel } from './entities/nivel.entity';

@Controller('niveles')
export class NivelesController {
  constructor(private readonly nivelesService: NivelesService) {}

  @Get()
  findAll(): Promise<Nivel[]> {
    return this.nivelesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Nivel> {
    return this.nivelesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Nivel>): Promise<Nivel> {
    return this.nivelesService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Nivel>): Promise<Nivel> {
    return this.nivelesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.nivelesService.remove(id);
  }
}