module.exports = {
  index: async (req, res) => {
    const name = 'Doe';

    return res.render('tempat', {
      name,
    });
  },
};
