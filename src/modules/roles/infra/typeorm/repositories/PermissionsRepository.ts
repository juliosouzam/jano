import { getRepository, Repository } from 'typeorm';

import { ICreatePermissionDTO } from '@modules/roles/dtos/ICreatePermissionDTO';
import { IPermissionsRepository } from '@modules/roles/protocols/IPermissionsRepository';

import { Permission } from '../entities/Permission';

export class PermissionsRepository implements IPermissionsRepository {
  private readonly repository: Repository<Permission>;

  constructor() {
    this.repository = getRepository(Permission);
  }

  async create({ name, slug, role_id }: ICreatePermissionDTO): Promise<void> {
    const permission = this.repository.create({
      name,
      slug,
      role_id,
    });

    await this.repository.save(permission);
  }

  async findBySlug(slug: string): Promise<Permission | undefined> {
    return this.repository.findOne({ slug });
  }

  async findById(id: number): Promise<Permission | undefined> {
    return this.repository.findOne(id);
  }

  async findByExternalId(_id: string): Promise<Permission | undefined> {
    return this.repository.findOne({ _id });
  }

  async save(permission: Permission): Promise<void> {
    await this.repository.save(permission);
  }
}
