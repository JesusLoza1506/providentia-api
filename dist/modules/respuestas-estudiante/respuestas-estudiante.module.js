"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespuestasEstudianteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const respuesta_estudiante_entity_1 = require("./entities/respuesta-estudiante.entity");
const respuestas_estudiante_service_1 = require("./respuestas-estudiante.service");
const respuestas_estudiante_controller_1 = require("./respuestas-estudiante.controller");
let RespuestasEstudianteModule = class RespuestasEstudianteModule {
};
exports.RespuestasEstudianteModule = RespuestasEstudianteModule;
exports.RespuestasEstudianteModule = RespuestasEstudianteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([respuesta_estudiante_entity_1.RespuestaEstudiante])],
        controllers: [respuestas_estudiante_controller_1.RespuestasEstudianteController],
        providers: [respuestas_estudiante_service_1.RespuestasEstudianteService],
        exports: [respuestas_estudiante_service_1.RespuestasEstudianteService],
    })
], RespuestasEstudianteModule);
//# sourceMappingURL=respuestas-estudiante.module.js.map