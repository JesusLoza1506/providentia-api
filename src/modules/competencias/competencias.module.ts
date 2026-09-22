import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciasController } from './competencias.controller';
import { CompetenciasService } from './competencias.service';
import { Competencia } from './entities/competencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competencia])],
  controllers: [CompetenciasController],
  providers: [CompetenciasService],
  exports: [CompetenciasService, TypeOrmModule],
})
export class CompetenciasModule {}