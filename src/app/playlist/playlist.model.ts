export interface FeaturedPlaylist {
  featuredPlaylists: Playlist
}

export interface Playlist {
  name: string;
  content: Content[]
}

export interface Content {
  id: string;
  kind: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
}
