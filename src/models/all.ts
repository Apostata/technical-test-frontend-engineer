export interface keyValue {
  [key: string | number | symbol]: string | number | Map<String, number>;
}

export interface keyValueNested {
  [key: string | number | symbol]: keyValue;
}
