import { getRepository, Repository } from 'typeorm';

import { ICreateRoleDTO } from '@modules/roles/dtos/ICreateRoleDTO';
import { IRolesRepository } from '@modules/roles/protocols/IRolesRepository';

import { Role } from '../entities/Role';

export class RolesRepository implements IRolesRepository {
  private readonly repository: Repository<Role>;

  constructor() {
    this.repository = getRepository(Role);
  }

  async create({ name, slug }: ICreateRoleDTO): Promise<void> {
    const role = this.repository.create({ name, slug });

    await this.repository.save(role);
  }

  async findBySlug(slug: string): Promise<Role | undefined> {
    return this.repository.findOne({ slug });
  }

  async findById(id: number): Promise<Role | undefined> {
    return this.repository.findOne(id);
  }

  async findByExternalId(_id: string): Promise<Role | undefined> {
    return this.repository.findOne({ _id });
  }

  async save(role: Role): Promise<void> {
    await this.repository.save(role);
  }
}
