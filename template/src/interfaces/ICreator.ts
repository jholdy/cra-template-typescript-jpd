export default interface ICreator<T = any> {
  type: string;
  payload: T;
}
