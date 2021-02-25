import AgoraRTC from "agora-rtc-sdk-ng";

const client = AgoraRTC.createClient({ codec: "vp8", mode: "rtc" });

const localTracks = {
  audioTrack: null,
};
const state = {
  /**
   * For the local client.
   * @type {IAgoraRTCClient | null}
   */
  client: null,

  /** @type {UID | null} */
  currentUserId: null,

  joined: false,

  /**
   * For the local audio track.
   * @type {IMicrophoneAudioTrack | null}
   */
  localAudioTrack: null,

  /** @type {Set<IAgoraRTCRemoteUser>} */
  participants: new Set(),

  published: false,

  /** @type {Set<IAgoraRTCRemoteUser>} */
  speakers: new Set(),
};
