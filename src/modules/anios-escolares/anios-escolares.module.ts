import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AniosEscolaresController } from './anios-escolares.controller';
import { AniosEscolaresService } from './anios-escolares.service';
import { AnioEscolar } from './entities/anio-escolar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnioEscolar])],
  controllers: [AniosEscolaresController],
  providers: [AniosEscolaresService],
  exports: [AniosEscolaresService, TypeOrmModule],
})
export class AniosEscolaresModule {}