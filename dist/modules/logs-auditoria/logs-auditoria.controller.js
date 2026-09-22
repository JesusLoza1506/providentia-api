"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAuditoriaController = void 0;
const common_1 = require("@nestjs/common");
const logs_auditoria_service_1 = require("./logs-auditoria.service");
let LogsAuditoriaController = class LogsAuditoriaController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findByUsuario(usuarioId) {
        return this.service.findByUsuario(usuarioId);
    }
    findByEntidad(entidadAfectada, entidadId) {
        const id = entidadId ? parseInt(entidadId, 10) : undefined;
        return this.service.findByEntidad(entidadAfectada, id);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(data) {
        return this.service.create(data);
    }
};
exports.LogsAuditoriaController = LogsAuditoriaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogsAuditoriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LogsAuditoriaController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)('entidad/:entidadAfectada'),
    __param(0, (0, common_1.Param)('entidadAfectada')),
    __param(1, (0, common_1.Query)('entidadId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LogsAuditoriaController.prototype, "findByEntidad", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LogsAuditoriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogsAuditoriaController.prototype, "create", null);
exports.LogsAuditoriaController = LogsAuditoriaController = __decorate([
    (0, common_1.Controller)('logs-auditoria'),
    __metadata("design:paramtypes", [logs_auditoria_service_1.LogsAuditoriaService])
], LogsAuditoriaController);
//# sourceMappingURL=logs-auditoria.controller.js.map