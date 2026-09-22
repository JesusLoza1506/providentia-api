import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForosController } from './foros.controller';
import { ForosService } from './foros.service';
import { Foro } from './entities/foro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Foro])],
  controllers: [ForosController],
  providers: [ForosService],
  exports: [ForosService, TypeOrmModule],
})
export class ForosModule {}