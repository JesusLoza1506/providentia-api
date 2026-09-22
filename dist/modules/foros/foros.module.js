"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const foros_controller_1 = require("./foros.controller");
const foros_service_1 = require("./foros.service");
const foro_entity_1 = require("./entities/foro.entity");
let ForosModule = class ForosModule {
};
exports.ForosModule = ForosModule;
exports.ForosModule = ForosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([foro_entity_1.Foro])],
        controllers: [foros_controller_1.ForosController],
        providers: [foros_service_1.ForosService],
        exports: [foros_service_1.ForosService, typeorm_1.TypeOrmModule],
    })
], ForosModule);
//# sourceMappingURL=foros.module.js.map