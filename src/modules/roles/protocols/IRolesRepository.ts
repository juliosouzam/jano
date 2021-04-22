import { ICreateRoleDTO } from '../dtos/ICreateRoleDTO';
import { Role } from '../infra/typeorm/entities/Role';

export interface IRolesRepository {
  create(data: ICreateRoleDTO): Promise<void>;
  findBySlug(slug: string): Promise<Role | undefined>;
  findById(id: number): Promise<Role | undefined>;
  findByExternalId(id: string): Promise<Role | undefined>;
  save(role: Role): Promise<void>;
}
