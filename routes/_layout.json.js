import fs from 'fs';

export function get(req, res, next) {
  const { slug } = req.params;

  const examples = fs.readdirSync('components/examples').filter(d => d.charAt(0) !== '.');
  
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({ examples }));
}
