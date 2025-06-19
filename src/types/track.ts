export interface Track {
  album_id: string;
  album_image: string;
  album_name: string;
  artist_id: string;
  artist_idstr: string;
  artist_name: string;
  audio: string;
  audiodownload: string;
  audiodownload_allowed: boolean;
  duration: number;
  id: string;
  image: string;
  license_ccurl: string;
  name: string;
  position: number;
  prourl: string;
  releasedate: string;
  shareurl: string;
  shorturl: string;
}

export interface TrackItemProps {
  img: string;
  title: string;
  artist: string;
  duration: string;
}
