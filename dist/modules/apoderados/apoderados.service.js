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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApoderadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const apoderado_entity_1 = require("./entities/apoderado.entity");
let ApoderadosService = class ApoderadosService {
    apoderadoRepository;
    constructor(apoderadoRepository) {
        this.apoderadoRepository = apoderadoRepository;
    }
    async findAll() {
        return await this.apoderadoRepository.find({
            relations: { persona: true, usuario: true },
        });
    }
    async findOne(id) {
        const apoderado = await this.apoderadoRepository.findOne({
            where: { id },
            relations: { persona: true, usuario: true },
        });
        if (!apoderado) {
            throw new common_1.NotFoundException(`Apoderado con ID ${id} no encontrado`);
        }
        return apoderado;
    }
    async create(data) {
        const newApoderado = this.apoderadoRepository.create(data);
        return await this.apoderadoRepository.save(newApoderado);
    }
    async update(id, data) {
        const apoderado = await this.findOne(id);
        Object.assign(apoderado, data);
        return await this.apoderadoRepository.save(apoderado);
    }
    async remove(id) {
        const apoderado = await this.findOne(id);
        await this.apoderadoRepository.remove(apoderado);
    }
};
exports.ApoderadosService = ApoderadosService;
exports.ApoderadosService = ApoderadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apoderado_entity_1.Apoderado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ApoderadosService);
//# sourceMappingURL=apoderados.service.js.map