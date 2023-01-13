export const getFilename = (str: string): string =>
	str.substring(str.lastIndexOf('\\') + 1);
