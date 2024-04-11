import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });

  const [, token] = authHeader.split(' ');

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, { user }) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    req.user = user;
    next();
  });
};

export default verifyToken;
