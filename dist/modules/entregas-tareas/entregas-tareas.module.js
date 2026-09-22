"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntregasTareasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entregas_tareas_controller_1 = require("./entregas-tareas.controller");
const entregas_tareas_service_1 = require("./entregas-tareas.service");
const entrega_tarea_entity_1 = require("./entities/entrega-tarea.entity");
let EntregasTareasModule = class EntregasTareasModule {
};
exports.EntregasTareasModule = EntregasTareasModule;
exports.EntregasTareasModule = EntregasTareasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entrega_tarea_entity_1.EntregaTarea])],
        controllers: [entregas_tareas_controller_1.EntregasTareasController],
        providers: [entregas_tareas_service_1.EntregasTareasService],
        exports: [entregas_tareas_service_1.EntregasTareasService, typeorm_1.TypeOrmModule],
    })
], EntregasTareasModule);
//# sourceMappingURL=entregas-tareas.module.js.map