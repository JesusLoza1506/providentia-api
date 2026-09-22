import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DocumentosService } from './documentos.service';
import { Documento } from './entities/documento.entity';

@Controller('documentos')
export class DocumentosController {
  constructor(private readonly service: DocumentosService) {}

  @Get()
  findAll(): Promise<Documento[]> {
    return this.service.findAll();
  }

  @Get('estudiante/:estudianteId')
  findByEstudiante(@Param('estudianteId', ParseIntPipe) estudianteId: number): Promise<Documento[]> {
    return this.service.findByEstudiante(estudianteId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Documento> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Documento>): Promise<Documento> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Documento>): Promise<Documento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}