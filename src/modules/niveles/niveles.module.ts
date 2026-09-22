import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelesController } from './niveles.controller';
import { NivelesService } from './niveles.service';
import { Nivel } from './entities/nivel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nivel])], // Importa la entidad Nivel para este módulo
  controllers: [NivelesController],
  providers: [NivelesService],
  exports: [NivelesService, TypeOrmModule],
})
export class NivelesModule {}