import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { Asistencia } from './entities/asistencia.entity';

@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly service: AsistenciasService) {}

  @Get()
  findAll(): Promise<Asistencia[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Asistencia> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Asistencia>): Promise<Asistencia> {
    return this.service.create(data);
  }

  @Post('bulk')
  createBulk(@Body() dataList: Partial<Asistencia>[]): Promise<Asistencia[]> {
    return this.service.createBulk(dataList);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Asistencia>): Promise<Asistencia> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}