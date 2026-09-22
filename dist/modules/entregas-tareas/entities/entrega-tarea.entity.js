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
exports.EntregaTarea = void 0;
const typeorm_1 = require("typeorm");
const tarea_entity_1 = require("../../tareas/entities/tarea.entity");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
let EntregaTarea = class EntregaTarea {
    id;
    tareaId;
    tarea;
    estudianteId;
    estudiante;
    archivoUrl;
    comentario;
    fechaEntrega;
    calificacion;
    feedbackDocente;
    createdAt;
    updatedAt;
};
exports.EntregaTarea = EntregaTarea;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EntregaTarea.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tarea_id', type: 'int' }),
    __metadata("design:type", Number)
], EntregaTarea.prototype, "tareaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarea_entity_1.Tarea, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'tarea_id' }),
    __metadata("design:type", tarea_entity_1.Tarea)
], EntregaTarea.prototype, "tarea", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], EntregaTarea.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], EntregaTarea.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'archivo_url', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EntregaTarea.prototype, "archivoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], EntregaTarea.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_entrega', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EntregaTarea.prototype, "fechaEntrega", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], EntregaTarea.prototype, "calificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'feedback_docente', type: 'text', nullable: true }),
    __metadata("design:type", String)
], EntregaTarea.prototype, "feedbackDocente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], EntregaTarea.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], EntregaTarea.prototype, "updatedAt", void 0);
exports.EntregaTarea = EntregaTarea = __decorate([
    (0, typeorm_1.Entity)('entregas_tareas'),
    (0, typeorm_1.Unique)(['tareaId', 'estudianteId'])
], EntregaTarea);
//# sourceMappingURL=entrega-tarea.entity.js.map