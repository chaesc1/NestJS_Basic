import { HttpException, Injectable } from '@nestjs/common';
import { Cat } from './cats.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CatRequestDto } from 'src/dto/cats.request.dto';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async findCatByIdwithoutPassword(catId: string): Promise<Cat | null> {
    const cat = await this.catModel.findById(catId).select('-password');
    return cat;
  }
  async findCatByEmail(email: string): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ email });
    return cat;
  }
  async existsByEmail(email: string): Promise<boolean> {
    // try {
    //   const result = await this.catModel.exists({ email });
    //   if (result) return true;
    //   else return false;
    // } catch (error) {
    //   throw new HttpException('db error', 400);
    // }
    const result = await this.catModel.exists({ email });
    if (result) return true;
    else return false;
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }
}
