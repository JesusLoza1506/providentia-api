import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatIaHistorial } from './entities/chat-ia-historial.entity';
import { ChatIaHistorialService } from './chat-ia-historial.service';
import { ChatIaHistorialController } from './chat-ia-historial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChatIaHistorial])],
  controllers: [ChatIaHistorialController],
  providers: [ChatIaHistorialService],
  exports: [ChatIaHistorialService],
})
export class ChatIaHistorialModule {}