import { Request, Response } from "express";
import { Url } from "./db";
import { DOMAIN } from "./utils/config";
import { statusCodes } from "./utils/constants";
import ri from "./utils/log";
import randomString from "./utils/randomString";

export async function getUrls(req: Request, res: Response) {
  const {limit: stringLimit, lastCreationTime = null, type = null} = req.query;
  const limit = parseInt(stringLimit as string, 10);
  console.log(req.query);
  let urls;
  if (!lastCreationTime && !type){
    urls = await Url.find({}).limit(limit).sort({ creationTime: -1 });
  }
  if (lastCreationTime && type === 'prev'){
    urls = await Url.find({creationTime: {$lt: lastCreationTime}})
    .sort({ creationTime: -1 }).limit(limit);
  }

  if (lastCreationTime && type === 'next'){
    urls = await Url.find({creationTime: {$gt: lastCreationTime}})
    .sort({ creationTime: 1}).limit(limit);
  }

  res.status(statusCodes.OK).json(urls);
}

export async function receiveUrl(req: Request, res: Response) {
  const { longUrl, creationTime, protocol } = req.body;
  const shortUrl = `${DOMAIN}/${randomString(8)}`;

  const urlDetails = await new Url({
    longUrl,
    shortUrl,
    creationTime,
    protocol,
  }).save();

  res.status(statusCodes.OK).json(urlDetails);
}

export async function welcome(req: Request, res: Response) {
  ri.show("Welcome to URL SHORTENER SERVER");
  res.status(statusCodes.OK).send("Welcome to URL SHORTENER SERVER");
}
