import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PlantEntity {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: true })
  commonName?: string;

  @Column({ nullable: true })
  scientificName?: string;

  @Column({ nullable: true })
  imageUrl?: string;
}
