import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { Pago } from './entities/pago.entity';

@Controller('pagos')
export class PagosController {
  constructor(private readonly service: PagosService) {}

  @Get()
  findAll(): Promise<Pago[]> {
    return this.service.findAll();
  }

  @Get('estudiante/:estudianteId')
  findByEstudiante(@Param('estudianteId', ParseIntPipe) estudianteId: number): Promise<Pago[]> {
    return this.service.findByEstudiante(estudianteId);
  }

  @Get('estado/:estado')
  findByEstado(@Param('estado') estado: string): Promise<Pago[]> {
    return this.service.findByEstado(estado);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Pago> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Pago>): Promise<Pago> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Pago>): Promise<Pago> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}