import { randomArrValue, randomArrNumber, buildUrlPlaylist, buildLiveChannelsUrl, buildLiveVideo } from './helpers.jsx'

export const video_experiences = {
  live_news_if_online : {
    spacexLiveChecker: buildLiveChannelsUrl('UCtI0Hodo5o5dUb67FeUjDeA'),
    podcastLiveChecker: buildLiveChannelsUrl('UCzQUP1qoWDoEbmsQxvdjxgQ'),
    youtubeLiveNowTechnology: buildUrlPlaylist('PL57quI9usf_th5iJjjhXcRzlzibHUgYMA'),
    youtubeLiveNowAnimals: buildUrlPlaylist('PLIFqWCuxNyoj8HAwNYOlqdDL52pNsbvKV')
  },
  static_news: {   /* static news updated daily */
    bbcTopStories: buildUrlPlaylist('PLS3XGZxi7cBVNadbxDqZCUgISvabEpu-g'),
    espnMustSee: buildUrlPlaylist('PLn3nHXu50t5xa7-HYnJpzN5cxkLYgFP_V')
  },
  live_music: {
    youtubeChilledCowByVideo: buildLiveVideo('hHW1oY26kxQ'),
    youtubeChilledCowByChannelId: buildLiveChannelsUrl('UCSJ4gkVC6NrvII8umztf0Ow')
  },
  code_pen: {
    hyperSpace: 'https://codepen.io/yuanchuan/full/dqrdow',
    enterTheMatrix: 'https://codepen.io/yuanchuan/full/YoqWeR',
    dnaSequence: 'https://codepen.io/yuanchuan/full/pBrMNQ',
    trippy: 'https://codepen.io/yuanchuan/full/wZJqNK',
    pitfall: 'https://codepen.io/dsenneff/full/RqYONv'
  },
  entertainment_and_visuals: {
    creedLoadscreens: 'PLZbIo_dYB77tFXtSy6nZjnRyiH_Hwqe_B',
    assassinsCreedTrailers: 'PLOcTEsKp5qpV7pbtiGeLAjlmD086bqymr',
    lofiAnimes: 'PLZbIo_dYB77tkPQCgwRMq9a_RRkq0UXZ3',
    historyOfArchitectureTestWillFailLaterOn: 'PL7_CkZ72ky5P1aPgHTbLBZbcddN_48F44',
    birds:'PLOh2AUhKQzaNeE-vXiH1SMeJyTdRT84dr'
  }
}


