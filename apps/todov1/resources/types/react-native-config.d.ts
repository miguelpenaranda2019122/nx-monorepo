declare module 'react-native-config' {
    export interface NativeConfig {
      NUMBER: string;
      NAME: string;
    }
    export const Config: NativeConfig;
    export default Config;
}