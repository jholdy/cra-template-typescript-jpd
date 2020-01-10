import ICreator from "../interfaces/ICreator";

export default function creator<T>(type = "TYPE_NOT_IS_SET") {
  return (payload: T): ICreator<T> => ({ type, payload });
}
