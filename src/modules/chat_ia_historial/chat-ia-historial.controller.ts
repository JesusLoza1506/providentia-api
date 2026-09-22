import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ChatIaHistorialService } from './chat-ia-historial.service';
import { ChatIaHistorial } from './entities/chat-ia-historial.entity';

@Controller('chat-ia-historial')
export class ChatIaHistorialController {
  constructor(private readonly service: ChatIaHistorialService) {}

  @Get()
  findAll(): Promise<ChatIaHistorial[]> {
    return this.service.findAll();
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<ChatIaHistorial[]> {
    return this.service.findByUsuario(usuarioId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ChatIaHistorial> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<ChatIaHistorial>): Promise<ChatIaHistorial> {
    return this.service.create(data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}