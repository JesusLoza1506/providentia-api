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
exports.AlertaIa = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let AlertaIa = class AlertaIa {
    id;
    estudianteId;
    estudiante;
    tipo;
    descripcion;
    nivelSeveridad;
    fechaGeneracion;
    atendidoPorId;
    atendidoPor;
    estado;
    createdAt;
    updatedAt;
};
exports.AlertaIa = AlertaIa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AlertaIa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], AlertaIa.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], AlertaIa.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], AlertaIa.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], AlertaIa.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nivel_severidad', type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], AlertaIa.prototype, "nivelSeveridad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_generacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AlertaIa.prototype, "fechaGeneracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atendido_por', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AlertaIa.prototype, "atendidoPorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'atendido_por' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], AlertaIa.prototype, "atendidoPor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, default: 'pendiente' }),
    __metadata("design:type", String)
], AlertaIa.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AlertaIa.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AlertaIa.prototype, "updatedAt", void 0);
exports.AlertaIa = AlertaIa = __decorate([
    (0, typeorm_1.Entity)('alertas_ia')
], AlertaIa);
//# sourceMappingURL=alerta-ia.entity.js.map