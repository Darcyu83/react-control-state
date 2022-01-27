console.log("Its. testing");
type TProperty<T extends number | string> = T extends number ? number : string;
function getPerson(property: TProperty<number | string>): string {
  if (typeof property == "string") {
    return " by name string";
  } else if (typeof property == "number") {
    return " by name number";
  }

  return "customer";
}

console.log(getPerson("1"));
export {};
