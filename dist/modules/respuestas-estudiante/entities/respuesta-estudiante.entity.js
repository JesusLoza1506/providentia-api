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
exports.RespuestaEstudiante = void 0;
const typeorm_1 = require("typeorm");
const examen_entity_1 = require("../../examenes/entities/examen.entity");
const pregunta_entity_1 = require("../../preguntas/entities/pregunta.entity");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
let RespuestaEstudiante = class RespuestaEstudiante {
    id;
    examenId;
    examen;
    preguntaId;
    pregunta;
    estudianteId;
    estudiante;
    respuestaTexto;
    calificacionIa;
    calificacionFinal;
    createdAt;
    updatedAt;
};
exports.RespuestaEstudiante = RespuestaEstudiante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RespuestaEstudiante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'examen_id', type: 'int' }),
    __metadata("design:type", Number)
], RespuestaEstudiante.prototype, "examenId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => examen_entity_1.Examen, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'examen_id' }),
    __metadata("design:type", examen_entity_1.Examen)
], RespuestaEstudiante.prototype, "examen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pregunta_id', type: 'int' }),
    __metadata("design:type", Number)
], RespuestaEstudiante.prototype, "preguntaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pregunta_entity_1.Pregunta, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'pregunta_id' }),
    __metadata("design:type", pregunta_entity_1.Pregunta)
], RespuestaEstudiante.prototype, "pregunta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], RespuestaEstudiante.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], RespuestaEstudiante.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'respuesta_texto', type: 'text', nullable: true }),
    __metadata("design:type", String)
], RespuestaEstudiante.prototype, "respuestaTexto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'calificacion_ia', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RespuestaEstudiante.prototype, "calificacionIa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'calificacion_final', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], RespuestaEstudiante.prototype, "calificacionFinal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], RespuestaEstudiante.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], RespuestaEstudiante.prototype, "updatedAt", void 0);
exports.RespuestaEstudiante = RespuestaEstudiante = __decorate([
    (0, typeorm_1.Entity)('respuestas_estudiante'),
    (0, typeorm_1.Unique)(['preguntaId', 'estudianteId'])
], RespuestaEstudiante);
//# sourceMappingURL=respuesta-estudiante.entity.js.map