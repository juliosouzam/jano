import { ICreateRoleDTO } from '@modules/roles/dtos/ICreateRoleDTO';
import { IRolesRepository } from '@modules/roles/protocols/IRolesRepository';

export class CreateRoleUseCase {
  constructor(private readonly rolesRepository: IRolesRepository) {}

  async handle({ name, slug }: ICreateRoleDTO): Promise<void> {
    const roleExistsBySlug = await this.rolesRepository.findBySlug(slug);
    if (roleExistsBySlug) {
      throw new Error('Role already exists');
    }

    await this.rolesRepository.create({ name, slug });
  }
}
