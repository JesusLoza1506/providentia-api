import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examen } from './entities/examen.entity';
import { ExamenesService } from './examenes.service';
import { ExamenesController } from './examenes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Examen])],
  controllers: [ExamenesController],
  providers: [ExamenesService],
  exports: [ExamenesService],
})
export class ExamenesModule {}