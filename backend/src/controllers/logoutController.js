require('dotenv').config();

const handleLogout = (req, res) => {
  res.cookie('auth-token', '', {
    httpOnly: true,
    expires: new Date(0),
    secure: process.env.NODE_ENV === 'production'
  }).send('Déconnexion réussie');
};

module.exports = { handleLogout };
