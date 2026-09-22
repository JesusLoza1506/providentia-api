"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForoMensajesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const foro_mensajes_controller_1 = require("./foro-mensajes.controller");
const foro_mensajes_service_1 = require("./foro-mensajes.service");
const foro_mensaje_entity_1 = require("./entities/foro-mensaje.entity");
let ForoMensajesModule = class ForoMensajesModule {
};
exports.ForoMensajesModule = ForoMensajesModule;
exports.ForoMensajesModule = ForoMensajesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([foro_mensaje_entity_1.ForoMensaje])],
        controllers: [foro_mensajes_controller_1.ForoMensajesController],
        providers: [foro_mensajes_service_1.ForoMensajesService],
        exports: [foro_mensajes_service_1.ForoMensajesService, typeorm_1.TypeOrmModule],
    })
], ForoMensajesModule);
//# sourceMappingURL=foro-mensajes.module.js.map