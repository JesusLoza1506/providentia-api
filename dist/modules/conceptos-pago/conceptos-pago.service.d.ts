import { Repository } from 'typeorm';
import { ConceptoPago } from './entities/concepto-pago.entity';
export declare class ConceptosPagoService {
    private readonly conceptoPagoRepository;
    constructor(conceptoPagoRepository: Repository<ConceptoPago>);
    findAll(): Promise<ConceptoPago[]>;
    findOne(id: number): Promise<ConceptoPago>;
    create(data: Partial<ConceptoPago>): Promise<ConceptoPago>;
    update(id: number, data: Partial<ConceptoPago>): Promise<ConceptoPago>;
    remove(id: number): Promise<void>;
}
