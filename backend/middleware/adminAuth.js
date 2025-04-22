import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

 
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ success: false, message: 'No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== 'admin@Vivienne.com') {
      return res.status(403).json({ success: false, message: 'Access denied: Admin only.' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token.' });
  }
};

export default adminAuth;
