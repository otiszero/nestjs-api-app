import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // this module is used to globally
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // other modules can use Prisma Service
})
export class PrismaModule {}
