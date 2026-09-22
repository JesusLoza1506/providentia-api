import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AniosEscolaresService } from './anios-escolares.service';
import { AnioEscolar } from './entities/anio-escolar.entity';

@Controller('anios-escolares')
export class AniosEscolaresController {
  constructor(private readonly aniosEscolaresService: AniosEscolaresService) {}

  @Get()
  findAll(): Promise<AnioEscolar[]> {
    return this.aniosEscolaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AnioEscolar> {
    return this.aniosEscolaresService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<AnioEscolar>): Promise<AnioEscolar> {
    return this.aniosEscolaresService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<AnioEscolar>): Promise<AnioEscolar> {
    return this.aniosEscolaresService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.aniosEscolaresService.remove(id);
  }
}