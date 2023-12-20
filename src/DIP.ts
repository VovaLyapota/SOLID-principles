console.log("DIP PAGE");

interface MusicApi {
  getTracks: () => void;
}

class ShazamMusicApi implements MusicApi {
  getTracks() {}
}

class SpotifyMusicApi implements MusicApi {
  getTracks() {}
}

class AppleMusicApi implements MusicApi {
  getTracks() {}
}

class MusicClient {
  constructor(private client: MusicApi) {}
  getTracks() {
    this.client.getTracks();
  }
}

const MusicApp = () => {
  const API = new MusicClient(new ShazamMusicApi());

  API.getTracks();
};
