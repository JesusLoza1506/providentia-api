import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Persona } from './entities/persona.entity';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Get()
  findAll(): Promise<Persona[]> {
    return this.personasService.findAll();
  }

  @Get('documento/:num')
  findByDocumento(@Param('num') num: string): Promise<Persona> {
    return this.personasService.findByNumeroDocumento(num);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Persona> {
    return this.personasService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Persona>): Promise<Persona> {
    return this.personasService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Persona>,
  ): Promise<Persona> {
    return this.personasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.personasService.remove(id);
  }
}