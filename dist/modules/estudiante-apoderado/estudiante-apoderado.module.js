"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteApoderadoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const estudiante_apoderado_controller_1 = require("./estudiante-apoderado.controller");
const estudiante_apoderado_service_1 = require("./estudiante-apoderado.service");
const estudiante_apoderado_entity_1 = require("./entities/estudiante-apoderado.entity");
let EstudianteApoderadoModule = class EstudianteApoderadoModule {
};
exports.EstudianteApoderadoModule = EstudianteApoderadoModule;
exports.EstudianteApoderadoModule = EstudianteApoderadoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([estudiante_apoderado_entity_1.EstudianteApoderado])],
        controllers: [estudiante_apoderado_controller_1.EstudianteApoderadoController],
        providers: [estudiante_apoderado_service_1.EstudianteApoderadoService],
        exports: [estudiante_apoderado_service_1.EstudianteApoderadoService, typeorm_1.TypeOrmModule],
    })
], EstudianteApoderadoModule);
//# sourceMappingURL=estudiante-apoderado.module.js.map