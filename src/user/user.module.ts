import { Module } from '@nestjs/common';
import { TenancyModule } from 'src/tenancy/tenancy.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TenancyModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
