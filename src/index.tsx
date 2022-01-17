import { NativeModules, Platform } from 'react-native'

const LINKING_ERROR =
  `The package 'ttdavid-rn-xprinter' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n'

const RNXprinter = NativeModules.RNXprinter
  ? NativeModules.RNXprinter
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        },
      }
    )

export default RNXprinter
