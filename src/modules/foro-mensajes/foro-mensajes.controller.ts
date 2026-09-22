import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ForoMensajesService } from './foro-mensajes.service';
import { ForoMensaje } from './entities/foro-mensaje.entity';

@Controller('foro-mensajes')
export class ForoMensajesController {
  constructor(private readonly service: ForoMensajesService) {}

  @Get()
  findAll(): Promise<ForoMensaje[]> {
    return this.service.findAll();
  }

  @Get('foro/:foroId')
  findByForo(@Param('foroId', ParseIntPipe) foroId: number): Promise<ForoMensaje[]> {
    return this.service.findByForo(foroId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ForoMensaje> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<ForoMensaje>): Promise<ForoMensaje> {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ForoMensaje>): Promise<ForoMensaje> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}