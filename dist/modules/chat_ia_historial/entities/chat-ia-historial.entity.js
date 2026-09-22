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
exports.ChatIaHistorial = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const curso_virtual_entity_1 = require("../../cursos-virtuales/entities/curso-virtual.entity");
let ChatIaHistorial = class ChatIaHistorial {
    id;
    usuarioId;
    usuario;
    cursoVirtualId;
    cursoVirtual;
    pregunta;
    respuesta;
    fecha;
    createdAt;
    updatedAt;
};
exports.ChatIaHistorial = ChatIaHistorial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChatIaHistorial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', type: 'int' }),
    __metadata("design:type", Number)
], ChatIaHistorial.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], ChatIaHistorial.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_virtual_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ChatIaHistorial.prototype, "cursoVirtualId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_virtual_entity_1.CursoVirtual, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_virtual_id' }),
    __metadata("design:type", curso_virtual_entity_1.CursoVirtual)
], ChatIaHistorial.prototype, "cursoVirtual", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ChatIaHistorial.prototype, "pregunta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ChatIaHistorial.prototype, "respuesta", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha', type: 'timestamp' }),
    __metadata("design:type", Date)
], ChatIaHistorial.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ChatIaHistorial.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ChatIaHistorial.prototype, "updatedAt", void 0);
exports.ChatIaHistorial = ChatIaHistorial = __decorate([
    (0, typeorm_1.Entity)('chat_ia_historial')
], ChatIaHistorial);
//# sourceMappingURL=chat-ia-historial.entity.js.map