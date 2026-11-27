export function onRequestGet() {
  return new Response('pong-get', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}

export function onRequestPost() {
  return new Response('pong-post', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
