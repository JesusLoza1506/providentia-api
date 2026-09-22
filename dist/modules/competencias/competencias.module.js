"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetenciasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const competencias_controller_1 = require("./competencias.controller");
const competencias_service_1 = require("./competencias.service");
const competencia_entity_1 = require("./entities/competencia.entity");
let CompetenciasModule = class CompetenciasModule {
};
exports.CompetenciasModule = CompetenciasModule;
exports.CompetenciasModule = CompetenciasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([competencia_entity_1.Competencia])],
        controllers: [competencias_controller_1.CompetenciasController],
        providers: [competencias_service_1.CompetenciasService],
        exports: [competencias_service_1.CompetenciasService, typeorm_1.TypeOrmModule],
    })
], CompetenciasModule);
//# sourceMappingURL=competencias.module.js.map