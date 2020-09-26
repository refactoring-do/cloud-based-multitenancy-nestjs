import { Provider, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Connection, getConnection } from 'typeorm';
import { Request } from 'express';

import { Tenancy } from './tenancy.entity';

export const TENANT_CONNECTION = 'TENANT_CONNECTION';

export const TenantProvider: Provider = {
  provide: TENANT_CONNECTION,
  inject: [REQUEST, Connection],
  scope: Scope.REQUEST,
  useFactory: async (req: Request, connection: Connection) => {
    const name: string = req.params['tenant'];
    const tenant: Tenancy = await connection
      .getRepository(Tenancy)
      .findOne({ where: { name } });

    return getConnection(tenant.name);
  },
};
