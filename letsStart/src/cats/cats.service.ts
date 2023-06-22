import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

//* READ 고양이 전체 데이터 다 조회
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* READ 특정 고양이 데이터 조회
//동적 라우팅
export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* CREATE 새로운 고양이 데이터 추가 api -> 블로그 포스팅 or 회원가입 이랑 다 비슷한 타입
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      //데이터베이스에서 각각 순회를해
      if (cat.id === params.id) {
        //cat에 있는 id 와 param의 id 가 같다면?
        cat = body;
        result = cat;
      }
    });
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      //데이터베이스에서 각각 순회를해
      if (cat.id === params.id) {
        //cat에 있는 id 와 param의 id 가 같다면?
        cat = { ...cat, ...body }; //구조분해
        result = cat;
      }
    });
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
