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
exports.Pago = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
const concepto_pago_entity_1 = require("../../conceptos-pago/entities/concepto-pago.entity");
const anio_escolar_entity_1 = require("../../anios-escolares/entities/anio-escolar.entity");
let Pago = class Pago {
    id;
    estudianteId;
    estudiante;
    conceptoPagoId;
    conceptoPago;
    anioEscolarId;
    anioEscolar;
    mesReferencia;
    monto;
    fechaVencimiento;
    estado;
    fechaPago;
    referenciaPasarela;
    createdAt;
    updatedAt;
};
exports.Pago = Pago;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pago.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], Pago.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Pago.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'concepto_pago_id', type: 'int' }),
    __metadata("design:type", Number)
], Pago.prototype, "conceptoPagoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => concepto_pago_entity_1.ConceptoPago, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'concepto_pago_id' }),
    __metadata("design:type", concepto_pago_entity_1.ConceptoPago)
], Pago.prototype, "conceptoPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_escolar_id', type: 'int' }),
    __metadata("design:type", Number)
], Pago.prototype, "anioEscolarId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => anio_escolar_entity_1.AnioEscolar, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'anio_escolar_id' }),
    __metadata("design:type", anio_escolar_entity_1.AnioEscolar)
], Pago.prototype, "anioEscolar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mes_referencia', type: 'smallint', nullable: true }),
    __metadata("design:type", Number)
], Pago.prototype, "mesReferencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2 }),
    __metadata("design:type", Number)
], Pago.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_vencimiento', type: 'date' }),
    __metadata("design:type", Date)
], Pago.prototype, "fechaVencimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, default: 'pendiente' }),
    __metadata("design:type", String)
], Pago.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_pago', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Pago.prototype, "fechaPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referencia_pasarela', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Pago.prototype, "referenciaPasarela", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Pago.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Pago.prototype, "updatedAt", void 0);
exports.Pago = Pago = __decorate([
    (0, typeorm_1.Entity)('pagos')
], Pago);
//# sourceMappingURL=pago.entity.js.map