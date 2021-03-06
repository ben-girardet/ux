import * as path from 'path';
import { configureKarma, KarmaConfig, KarmaConfigOptions } from '../../karma.conf';

export default (config: KarmaConfig): void => {
  configureKarma(config, (options: KarmaConfigOptions) => {
    options.basePath = path.resolve(__dirname);
  });
};
