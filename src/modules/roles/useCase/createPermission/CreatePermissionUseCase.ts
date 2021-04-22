import { IPermissionsRepository } from '@modules/roles/protocols/IPermissionsRepository';
import { IRolesRepository } from '@modules/roles/protocols/IRolesRepository';

interface IRequest {
  name: string;
  slug: string;
  role_id: string;
}

export class CreatePermissionUseCase {
  constructor(
    private readonly permissionsRepository: IPermissionsRepository,
    private readonly rolesRepository: IRolesRepository
  ) {}

  async handle({ name, slug, role_id }: IRequest): Promise<void> {
    const permissionsAlreadyExists = await this.permissionsRepository.findBySlug(
      slug
    );
    if (permissionsAlreadyExists) {
      throw new Error('Permission already exists');
    }

    const role = await this.rolesRepository.findByExternalId(role_id);
    if (!role) {
      throw new Error('Role dont exists');
    }

    await this.permissionsRepository.create({
      name: name.trim(),
      slug,
      role_id: role.id,
    });
  }
}
