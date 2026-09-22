"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoDocenteSeccionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const curso_docente_seccion_controller_1 = require("./curso-docente-seccion.controller");
const curso_docente_seccion_service_1 = require("./curso-docente-seccion.service");
const curso_docente_seccion_entity_1 = require("./entities/curso-docente-seccion.entity");
let CursoDocenteSeccionModule = class CursoDocenteSeccionModule {
};
exports.CursoDocenteSeccionModule = CursoDocenteSeccionModule;
exports.CursoDocenteSeccionModule = CursoDocenteSeccionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([curso_docente_seccion_entity_1.CursoDocenteSeccion])],
        controllers: [curso_docente_seccion_controller_1.CursoDocenteSeccionController],
        providers: [curso_docente_seccion_service_1.CursoDocenteSeccionService],
        exports: [curso_docente_seccion_service_1.CursoDocenteSeccionService, typeorm_1.TypeOrmModule],
    })
], CursoDocenteSeccionModule);
//# sourceMappingURL=curso-docente-seccion.module.js.map