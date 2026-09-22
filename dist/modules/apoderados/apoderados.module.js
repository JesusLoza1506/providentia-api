"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApoderadosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apoderados_controller_1 = require("./apoderados.controller");
const apoderados_service_1 = require("./apoderados.service");
const apoderado_entity_1 = require("./entities/apoderado.entity");
let ApoderadosModule = class ApoderadosModule {
};
exports.ApoderadosModule = ApoderadosModule;
exports.ApoderadosModule = ApoderadosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([apoderado_entity_1.Apoderado])],
        controllers: [apoderados_controller_1.ApoderadosController],
        providers: [apoderados_service_1.ApoderadosService],
        exports: [apoderados_service_1.ApoderadosService, typeorm_1.TypeOrmModule],
    })
], ApoderadosModule);
//# sourceMappingURL=apoderados.module.js.map