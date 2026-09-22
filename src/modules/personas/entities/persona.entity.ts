import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Representa la tabla 'personas' segun el diccionario de datos
@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  // Tipo de documento: DNI, CE, Pasaporte
  @Column({ name: 'tipo_documento', type: 'varchar', length: 10 })
  tipoDocumento: string;

  @Column({ name: 'numero_documento', type: 'varchar', length: 20, unique: true })
  numeroDocumento: string;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ name: 'apellido_paterno', type: 'varchar', length: 60 })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno', type: 'varchar', length: 60, nullable: true })
  apellidoMaterno: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento: Date;

  @Column({ type: 'varchar', length: 1, nullable: true })
  sexo: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  direccion: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ name: 'email_contacto', type: 'varchar', length: 120, nullable: true })
  emailContacto: string;

  @Column({ name: 'foto_url', type: 'varchar', length: 255, nullable: true })
  fotoUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}