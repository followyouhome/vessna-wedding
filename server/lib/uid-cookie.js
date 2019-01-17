module.exports = {
  set: (req, res) => {
    if (req.user) {
      const uid = req.user._id && req.user._id.toString();
      const canAccessKeystone = req.user.canAccessKeystone && req.user.canAccessKeystone.toString() || 'false';
      const canAccessContent = req.user.canAccessContent && req.user.canAccessContent.toString() || 'false';

      res.cookie('uid', uid, { httpOnly: false });
      res.cookie('canAccessKeystone', canAccessKeystone, { httpOnly: false });
      res.cookie('canAccessContent', canAccessContent, { httpOnly: false });
    }
  },
  remove: (req, res) => {
    res.clearCookie('uid');
    res.clearCookie('canAccessKeystone');
    res.clearCookie('canAccessContent');
  },
};
