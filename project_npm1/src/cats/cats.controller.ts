import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveint.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  //   @UseFilters(HttpExceptionFilter)
  getAllCat() {
    // throw new HttpException('api is broken', 401);
    console.log('hello controller');
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param) {
    console.log(param);
    // console.log(typeof param);
    return { cats: 'get all cat api' };
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put('id:')
  updateCat() {
    return { cats: 'get update cat api' };
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
