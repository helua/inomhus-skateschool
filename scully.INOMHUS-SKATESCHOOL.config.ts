import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "INOMHUS-SKATESCHOOL",
  outDir: './dist/INOMHUS-SKATESCHOOL/static',
  routes: {
  }
};