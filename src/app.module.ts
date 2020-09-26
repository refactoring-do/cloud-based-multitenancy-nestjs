import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConnectionOptions } from 'typeorm';
import { TenancyModule } from './tenancy/tenancy.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TenancyModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      async useFactory(config: ConfigService) {
        return {
          type: 'mysql',
          host: config.get('DB_HOST'),
          username: config.get('DB_USER'),
          password: config.get('DB_PASSWORD'),
          port: +config.get('DB_PORT'),
          database: config.get('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true,
          ssl: true,
        } as ConnectionOptions;
      },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('APP_PORT');
  }
}
