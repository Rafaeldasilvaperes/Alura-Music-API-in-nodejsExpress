import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function tokenValidator(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token){
    return res.status(401).json({message: "Access denied!"});
  }
  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret)
    next()
  } catch (error) {
    return res.status(400).json({message: "Not a token"})
  }
}