import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { Material } from './entities/material.entity';

@Controller('materiales')
export class MaterialesController {
  constructor(private readonly service: MaterialesService) {}

  @Get()
  findAll(): Promise<Material[]> {
    return this.service.findAll();
  }

  @Get('curso-virtual/:cursoVirtualId')
  findByCursoVirtual(
    @Param('cursoVirtualId', ParseIntPipe) cursoVirtualId: number,
  ): Promise<Material[]> {
    return this.service.findByCursoVirtual(cursoVirtualId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Material> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Material>): Promise<Material> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Material>,
  ): Promise<Material> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}