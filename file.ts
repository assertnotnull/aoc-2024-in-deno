export async function readFile(path: string) {
  const decoder = new TextDecoder();
  const buffer = await Deno.readFile(path);
  return decoder.decode(buffer);
}

const getLines = (data: string) => data.split("\n");

export async function getLinesOfFile(path: string) {
  const data = await readFile(path);
  return getLines(data).filter((line) => line.length);
}
