require('dotenv').config();

const handleLogout = (req, res) => {
  const isProduction = process.env.NODE_ENV === 'production';
  
  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'None' : 'Lax',
    expires: new Date(0)
  };

  if (isProduction) {
    cookieOptions.domain = process.env.DOMAIN;
  }

  res.cookie('auth-token', '', cookieOptions).send('Déconnexion réussie');
};

module.exports = { handleLogout };
