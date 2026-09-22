import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AlertasIaService } from './alertas-ia.service';
import { AlertaIa } from './entities/alerta-ia.entity';

@Controller('alertas-ia')
export class AlertasIaController {
  constructor(private readonly service: AlertasIaService) {}

  @Get()
  findAll(): Promise<AlertaIa[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AlertaIa> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<AlertaIa>): Promise<AlertaIa> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<AlertaIa>): Promise<AlertaIa> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}