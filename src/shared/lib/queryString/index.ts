export const toQueryString = (params: any) => {
  return new URLSearchParams(
    Object.entries(params).flatMap(([key, value]) =>
      Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
    )
  ).toString();
};
