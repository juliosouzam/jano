import { ICreatePermissionDTO } from '../dtos/ICreatePermissionDTO';
import { Permission } from '../infra/typeorm/entities/Permission';

export interface IPermissionsRepository {
  create(data: ICreatePermissionDTO): Promise<void>;
  findBySlug(slug: string): Promise<Permission | undefined>;
  findById(id: number): Promise<Permission | undefined>;
  findByExternalId(_id: string): Promise<Permission | undefined>;
  save(permission: Permission): Promise<void>;
}
