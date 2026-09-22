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
exports.ForoMensaje = void 0;
const typeorm_1 = require("typeorm");
const foro_entity_1 = require("../../foros/entities/foro.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let ForoMensaje = class ForoMensaje {
    id;
    foroId;
    foro;
    usuarioId;
    usuario;
    mensajePadreId;
    mensajePadre;
    contenido;
    fecha;
    createdAt;
    updatedAt;
};
exports.ForoMensaje = ForoMensaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ForoMensaje.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foro_id', type: 'int' }),
    __metadata("design:type", Number)
], ForoMensaje.prototype, "foroId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => foro_entity_1.Foro, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'foro_id' }),
    __metadata("design:type", foro_entity_1.Foro)
], ForoMensaje.prototype, "foro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', type: 'int' }),
    __metadata("design:type", Number)
], ForoMensaje.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], ForoMensaje.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mensaje_padre_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], ForoMensaje.prototype, "mensajePadreId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ForoMensaje, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'mensaje_padre_id' }),
    __metadata("design:type", ForoMensaje)
], ForoMensaje.prototype, "mensajePadre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ForoMensaje.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ForoMensaje.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ForoMensaje.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ForoMensaje.prototype, "updatedAt", void 0);
exports.ForoMensaje = ForoMensaje = __decorate([
    (0, typeorm_1.Entity)('foro_mensajes')
], ForoMensaje);
//# sourceMappingURL=foro-mensaje.entity.js.map