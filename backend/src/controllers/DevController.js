import axios from 'axios';

import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';

class DevController {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  async create(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      // eslint-disable-next-line no-undef
      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return res.json(dev);
  }
}

export default new DevController();
