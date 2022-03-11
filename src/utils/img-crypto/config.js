const DEFAULT_SEED = process.env.VUE_APP_IMG_EMCRYPT_KEY || 31845

export function getConfig () {
  return Object.assign({
    enableEncryption: true,
    enableDecryption: true,
    noWaterMark: true,
    codecName: 'ShuffleBlockCodec',
    randomSeed: DEFAULT_SEED,
    postProcess: ''
  }, JSON.parse(window.localStorage.wbImgCryptoConfig || '{}'))
}

export function setConfig (config) {
  window.localStorage.wbImgCryptoConfig = JSON.stringify(config)
}
