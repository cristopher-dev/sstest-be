import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ComponentModule } from './component/component.module';

@Module({
  imports: [DatabaseModule, ComponentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
