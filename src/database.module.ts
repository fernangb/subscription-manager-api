import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        join(
          __dirname,
          'modules',
          '**',
          'infra',
          'repositories',
          'typeorm',
          'models',
          '*.model.{ts,js}',
        ),
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
