import { ElementHandle, Locator } from '@playwright/test';
import {
	Browser,
	BrowserContext,
	BrowserContextOptions,
	BrowserType,
	Dialog,
	Download,
	FileChooser,
	Frame,
	LaunchOptions,
	Page,
	PageScreenshotOptions,
	Request,
	Route
} from '@playwright/test';
import {logger}  from './LoggerUtils';

export type LocatorType = string| ElementHandle<SVGElement | HTMLElement | Node>;
export let pwBrowserObject: PlaywrightBrowserObjects = null;
class PlaywrightBrowserObjects {
	pwDriver: Page;
	pwBrowser: Browser;
	pwContext: BrowserContext;
	pwDialog: Dialog;
	pwFileUploader: FileChooser;
}
pwBrowserObject = new PlaywrightBrowserObjects();

export const enterInputData = async (selector: string, keysToSend: string, waitTime: number): Promise<void> => {
	logger.info(`✒ Entering Text: ${keysToSend} In Element: [ ${(selector)} ]`);
	try {
			await pwBrowserObject.pwDriver.waitForLoadState('domcontentloaded');
			await pwBrowserObject.pwDriver.locator(selector)
				.first()
				.fill(keysToSend, { timeout: waitTime });
	} catch (err) {
		logger.error(`❌ Error In Entering Text: ${keysToSend}: ${err}`);
		throw err;
	}
};