import {Project} from "../../models/project";
import {icons} from "../icons";
import {MainProject} from "../../models/main-project";

export const projectMusicPlayerAndroid: Project = {
  routeParam: 'music-player-android',
  title: 'Music Player Android',
  description: 'Basic Music player Application for Android made during the course Mobile Application Development.',
  features: [
    'Display audio files on the users\' device displaying artis and album name and the album cover.',
    'Ability to play/pause audio.',
    'Background displays blurred image of the current track album cover.',
    'Ability to play next/previous track.',
    'Notification with media controls while playing a track.',
    'Plays/pauses when another application requests to play audio.',
    'Pauses when disconnected audio device (e.g. disconnecting from bluetooth headset).',
  ],
  technical: ['Kotlin', 'MVVM using Architecture Components.', 'Index audio files on device using MediaStore.', 'Use of MediaBrowserService, MediaSession, MediaController.'],
  imageUrls: [
    {name: 'Empty queue', url: 'https://github.com/kmartin0/assets/blob/master/android-music-player/android-music-player_empty_queue.png?raw=true'},
    {name: 'Playing', url: 'https://github.com/kmartin0/assets/blob/master/android-music-player/android-music-player_home_playing.png?raw=true'},
    {name: 'Music Player', url: 'https://github.com/kmartin0/assets/blob/master/android-music-player/android-music-player_player.png?raw=true'},
    {name: 'Lyrics', url: 'https://github.com/kmartin0/assets/blob/master/android-music-player/android-music-player_lyrics.png?raw=true'},
    {name: 'Widget', url: 'https://github.com/kmartin0/assets/blob/master/android-music-player/android-music-player_widget.png?raw=true'},
  ],
  stockImageUrl: {name: 'Empty queue', url: 'https://github.com/kmartin0/assets/blob/master/android-music-player/android-music-player_empty_queue.png?raw=true'},
  techs: [icons.android, icons.java],
  links: [
    {icon: icons.github, url: 'https://github.com/kmartin0/MusicPlayerAndroid'}
  ]
}

export const musicPlayerAndroidMainProject: MainProject = {
  title: 'Music Player Android',
  projects: [projectMusicPlayerAndroid]
}
