import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTenantDto, ReadTenantDto } from './dto';
import { TenancyService } from './tenancy.service';

@Controller('tenants')
export class TenancyController {
  constructor(private readonly tenantService: TenancyService) {}

  @Get()
  findAll(): Promise<ReadTenantDto[]> {
    return this.tenantService.findAll();
  }

  @Post()
  create(@Body() tenant: CreateTenantDto): Promise<ReadTenantDto> {
    return this.tenantService.create(tenant);
  }
}
