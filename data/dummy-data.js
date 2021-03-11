import User from "../models/user";
import Equation from "../models/equationModel";

export const USERS = [
  new User("u1", "Sally", "yellow"),
  new User("u2", "Mike", "pink"),
  new User("u3", "Phil", "green"),
];

export const EQUATION = [new Equation("3", "+", "5")];
