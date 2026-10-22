import { describe, expect, it } from 'vitest';
import raw from '../data/site.json';
import { schema } from './site';

const withCareersHref = (href: string) => ({
    ...raw,
    footer: { ...raw.footer, careers: { ...raw.footer.careers, href } },
});

const withPartnerLogo = (logo: string) => ({
    ...raw,
    footer: { ...raw.footer, partners: [{ ...raw.footer.partners[0], logo }, ...raw.footer.partners.slice(1)] },
});

describe('site.json links', () => {
    it.each([
        '/services',
        'https://example.org/jobs',
        'mailto:contact@elixir.no',
    ])('accepts %j', (href) => {
        expect(schema.safeParse(withCareersHref(href)).success).toBe(true);
    });

    // Each of these leaves the site: browsers read /\ like //, and drop tabs
    // and line breaks before reading the slashes.
    it.each([
        '//example.org',
        '/\\example.org',
        '/\t/example.org',
        '/\n/example.org',
        '/\r/example.org',
        'http://example.org',
        'javascript:void(0)',
    ])('rejects %j', (href) => {
        expect(schema.safeParse(withCareersHref(href)).success).toBe(false);
    });

    it('accepts a logo stored on this site', () => {
        expect(schema.safeParse(withPartnerLogo('/assets/logos/uib.svg')).success).toBe(true);
    });

    it.each([
        '//example.org/logo.svg',
        '/\t/example.org/logo.svg',
        'https://example.org/logo.svg',
    ])('rejects the logo %j', (logo) => {
        expect(schema.safeParse(withPartnerLogo(logo)).success).toBe(false);
    });
});
