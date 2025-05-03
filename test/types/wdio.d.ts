import type { Options } from '@wdio/types';

declare global {
  namespace WebdriverIO {
    interface Browser {
      $(selector: string): Element;
      takeScreenshot(): Promise<string>;
      saveScreenshot(filepath: string): Promise<string>;
    }
    interface Element {
      saveScreenshot(filepath: string): Promise<void>;
    }
    interface Config extends Options.Testrunner {
      video?: boolean;
      videoOptions?: {
        saveAllVideos: boolean;
        videoPath: string;
        videoFormat: string;
        videoQuality: number;
        videoFrameRate: number;
      };
    }
  }
}

export {};
