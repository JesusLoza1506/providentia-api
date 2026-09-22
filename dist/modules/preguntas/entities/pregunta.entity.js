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
exports.Pregunta = void 0;
const typeorm_1 = require("typeorm");
const examen_entity_1 = require("../../examenes/entities/examen.entity");
let Pregunta = class Pregunta {
    id;
    examenId;
    examen;
    enunciado;
    tipo;
    opciones;
    respuestaCorrecta;
    puntaje;
    createdAt;
    updatedAt;
};
exports.Pregunta = Pregunta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pregunta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'examen_id', type: 'int' }),
    __metadata("design:type", Number)
], Pregunta.prototype, "examenId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => examen_entity_1.Examen, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'examen_id' }),
    __metadata("design:type", examen_entity_1.Examen)
], Pregunta.prototype, "examen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Pregunta.prototype, "enunciado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Pregunta.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], Pregunta.prototype, "opciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'respuesta_correcta', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Pregunta.prototype, "respuestaCorrecta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Pregunta.prototype, "puntaje", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Pregunta.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Pregunta.prototype, "updatedAt", void 0);
exports.Pregunta = Pregunta = __decorate([
    (0, typeorm_1.Entity)('preguntas')
], Pregunta);
//# sourceMappingURL=pregunta.entity.js.map