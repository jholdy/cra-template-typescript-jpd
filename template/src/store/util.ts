export default function creator(type = "TYPE_NOT_IS_SET") {
  return payload => ({ type, payload });
}
