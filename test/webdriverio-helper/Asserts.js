import env from '../../wdio.env.js'

const envObj = new env();
const params = envObj.getParams();

export default class Asserts{

    async pauseIfHuman(seconds = null)
    {
        if(seconds === null) {
            seconds = params.is_human_pause;
        }
        if(params.is_human) {
            await browser.pause(seconds);
        }
    }

    async pageUrl(text, timeout=30000)
    {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === text;
            
        }, {
            timeout,
            timeoutMsg: `Expected URL '${text}' did not match within ${timeout}ms`
        });
        return expect(browser).toHaveUrl(text);

    }

    pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);

    }

    text(selector, text)
    {
        return expect(selector).toHaveTextContaining(text);
    }


};