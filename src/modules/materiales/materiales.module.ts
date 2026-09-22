import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesController } from './materiales.controller';
import { MaterialesService } from './materiales.service';
import { Material } from './entities/material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  controllers: [MaterialesController],
  providers: [MaterialesService],
  exports: [MaterialesService, TypeOrmModule],
})
export class MaterialesModule {}