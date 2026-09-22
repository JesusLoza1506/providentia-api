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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAuditoria = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let LogAuditoria = class LogAuditoria {
    id;
    usuarioId;
    usuario;
    accion;
    entidadAfectada;
    entidadId;
    ipOrigen;
    fecha;
    createdAt;
    updatedAt;
};
exports.LogAuditoria = LogAuditoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LogAuditoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LogAuditoria.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], LogAuditoria.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LogAuditoria.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entidad_afectada', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], LogAuditoria.prototype, "entidadAfectada", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entidad_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], LogAuditoria.prototype, "entidadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_origen', type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], LogAuditoria.prototype, "ipOrigen", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], LogAuditoria.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], LogAuditoria.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], LogAuditoria.prototype, "updatedAt", void 0);
exports.LogAuditoria = LogAuditoria = __decorate([
    (0, typeorm_1.Entity)('logs_auditoria')
], LogAuditoria);
//# sourceMappingURL=log-auditoria.entity.js.map