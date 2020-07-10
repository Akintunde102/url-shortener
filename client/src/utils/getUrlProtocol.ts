export default function geturlProtocol(urlString: string): string | null {
  let protocol = null;
  if (urlString.includes('https://')) {
    protocol = 'https';
  }

  if (urlString.includes('http://')) {
    protocol = 'http';
  }

  return protocol;
}
