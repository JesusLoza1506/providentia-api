"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatIaHistorialModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_ia_historial_entity_1 = require("./entities/chat-ia-historial.entity");
const chat_ia_historial_service_1 = require("./chat-ia-historial.service");
const chat_ia_historial_controller_1 = require("./chat-ia-historial.controller");
let ChatIaHistorialModule = class ChatIaHistorialModule {
};
exports.ChatIaHistorialModule = ChatIaHistorialModule;
exports.ChatIaHistorialModule = ChatIaHistorialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([chat_ia_historial_entity_1.ChatIaHistorial])],
        controllers: [chat_ia_historial_controller_1.ChatIaHistorialController],
        providers: [chat_ia_historial_service_1.ChatIaHistorialService],
        exports: [chat_ia_historial_service_1.ChatIaHistorialService],
    })
], ChatIaHistorialModule);
//# sourceMappingURL=chat-ia-historial.module.js.map