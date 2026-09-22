"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodosAcademicosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const periodos_academicos_controller_1 = require("./periodos-academicos.controller");
const periodos_academicos_service_1 = require("./periodos-academicos.service");
const periodo_academico_entity_1 = require("./entities/periodo-academico.entity");
let PeriodosAcademicosModule = class PeriodosAcademicosModule {
};
exports.PeriodosAcademicosModule = PeriodosAcademicosModule;
exports.PeriodosAcademicosModule = PeriodosAcademicosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([periodo_academico_entity_1.PeriodoAcademico])],
        controllers: [periodos_academicos_controller_1.PeriodosAcademicosController],
        providers: [periodos_academicos_service_1.PeriodosAcademicosService],
        exports: [periodos_academicos_service_1.PeriodosAcademicosService, typeorm_1.TypeOrmModule],
    })
], PeriodosAcademicosModule);
//# sourceMappingURL=periodos-academicos.module.js.map