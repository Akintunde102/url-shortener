import { Request, Response } from "express";
import { Url, User } from "./db";
import { DOMAIN } from "./utils/config";
import { statusCodes } from "./utils/constants";
import debug from "./utils/log";
import randomString from "./utils/randomString";

export async function processLogin(req: Request, res: Response): Promise<void> {
  const {username, password} = req.body.params;
  let ifPresent: any[] = [];

  if (username && password){
    ifPresent = await User.find({username, password});
  }

  debug.stringify({type: 'login', username, password, ifPresent: ifPresent.length});
  res.status(ifPresent.length ? statusCodes.OK : statusCodes.NOT_FOUND).json(ifPresent);
}

export async function processRegister(req: Request, res: Response): Promise<void> {
  const {username, password, fullName, role} = req.body.params;
  
  let userDetails;

  if (username && password && fullName && role){
    userDetails = await new User({username, password, fullName, role}).save();
  }
  debug.stringify({type: 'Register', username, password, fullName, role, userDetails});
  
  res.status(userDetails ? statusCodes.OK : statusCodes.UNEXPECTED).json(userDetails);
}

export async function getUrls(req: Request, res: Response): Promise<void> {
  const {limit: stringLimit, lastCreationTime = null, type = null} = req.query;
  const limit = parseInt(stringLimit as string, 10);
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

export async function receiveUrl(req: Request, res: Response): Promise<void> {
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

export async function welcome(req: Request, res: Response): Promise<void> {
  debug.show("Welcome to URL SHORTENER SERVER");
  res.status(statusCodes.OK).send("Welcome to URL SHORTENER SERVER");
}
