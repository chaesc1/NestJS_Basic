import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllCat() {
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put('id:')
  updateCat() {
    return 'update cat';
  }

  @Patch('id:')
  updatePartialCat() {
    return 'update';
  }

  @Delete('id:')
  deleteCat() {
    return 'delete service';
  }
}
