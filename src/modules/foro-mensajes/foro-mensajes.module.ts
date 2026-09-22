import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForoMensajesController } from './foro-mensajes.controller';
import { ForoMensajesService } from './foro-mensajes.service';
import { ForoMensaje } from './entities/foro-mensaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ForoMensaje])],
  controllers: [ForoMensajesController],
  providers: [ForoMensajesService],
  exports: [ForoMensajesService, TypeOrmModule],
})
export class ForoMensajesModule {}