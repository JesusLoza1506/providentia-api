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
exports.EstudianteApoderado = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
const apoderado_entity_1 = require("../../apoderados/entities/apoderado.entity");
let EstudianteApoderado = class EstudianteApoderado {
    id;
    estudianteId;
    estudiante;
    apoderadoId;
    apoderado;
    parentesco;
    esPrincipal;
    createdAt;
    updatedAt;
};
exports.EstudianteApoderado = EstudianteApoderado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EstudianteApoderado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], EstudianteApoderado.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], EstudianteApoderado.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apoderado_id', type: 'int' }),
    __metadata("design:type", Number)
], EstudianteApoderado.prototype, "apoderadoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apoderado_entity_1.Apoderado, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'apoderado_id' }),
    __metadata("design:type", apoderado_entity_1.Apoderado)
], EstudianteApoderado.prototype, "apoderado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], EstudianteApoderado.prototype, "parentesco", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'es_principal', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], EstudianteApoderado.prototype, "esPrincipal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], EstudianteApoderado.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], EstudianteApoderado.prototype, "updatedAt", void 0);
exports.EstudianteApoderado = EstudianteApoderado = __decorate([
    (0, typeorm_1.Entity)('estudiante_apoderado'),
    (0, typeorm_1.Unique)(['estudianteId', 'apoderadoId'])
], EstudianteApoderado);
//# sourceMappingURL=estudiante-apoderado.entity.js.map