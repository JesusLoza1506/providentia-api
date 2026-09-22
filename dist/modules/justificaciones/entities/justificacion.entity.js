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
exports.Justificacion = void 0;
const typeorm_1 = require("typeorm");
const asistencia_entity_1 = require("../../asistencias/entities/asistencia.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let Justificacion = class Justificacion {
    id;
    asistenciaId;
    asistencia;
    motivo;
    archivoUrl;
    estadoAprobacion;
    aprobadoPor;
    usuarioAprobador;
    createdAt;
    updatedAt;
};
exports.Justificacion = Justificacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Justificacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asistencia_id', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Justificacion.prototype, "asistenciaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => asistencia_entity_1.Asistencia, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'asistencia_id' }),
    __metadata("design:type", asistencia_entity_1.Asistencia)
], Justificacion.prototype, "asistencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Justificacion.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'archivo_url', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Justificacion.prototype, "archivoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_aprobacion', type: 'varchar', length: 15, default: 'pendiente' }),
    __metadata("design:type", String)
], Justificacion.prototype, "estadoAprobacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aprobado_por', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Justificacion.prototype, "aprobadoPor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'aprobado_por' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Justificacion.prototype, "usuarioAprobador", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Justificacion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Justificacion.prototype, "updatedAt", void 0);
exports.Justificacion = Justificacion = __decorate([
    (0, typeorm_1.Entity)('justificaciones')
], Justificacion);
//# sourceMappingURL=justificacion.entity.js.map