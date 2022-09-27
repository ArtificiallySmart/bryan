import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  commonName: string;

  @Column({ nullable: true })
  scientificName: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  description: string;
}
