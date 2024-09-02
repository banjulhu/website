import { SiFlickr, SiLinkedin, SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-dark-surface mt-24" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-full p-12 flex flex-col-reverse gap-y-6">
                <NewsletterSubscription/>
                <div className="grid grid-cols-4 grid-flow-row auto-rows-min gap-y-12">
                    <ElixirBrand/>
                    <ElixirOrgs/>
                    <Links/>
                </div>
            </div>
        </footer>
    );
}

const ElixirBrand = () => {
    return (
        <div className="col-span-full lg:col-span-1 place-content-end">
            <div className="flex sm:flex-row justify-between items-end lg:items-start lg:flex-col lg:gap-y-12">
                <a href="/" className="sm:order-1">
                    <img
                        alt="ELIXIR.NO Logo"
                        src="/images/logos/elixir-no-light.svg"
                        className="hidden dark:block h-24 w-auto"
                    />
                    <img
                        alt="ELIXIR.NO Logo"
                        src="/images/logos/elixir-no-dark.svg"
                        className="block dark:hidden h-24 w-auto"
                    />
                </a>
                <div className="flex space-x-4 sm:order-2">
                    <SocialButton
                        name="Twitter"
                        link="https://twitter.com/elixirnorway"
                        icon={<FaTwitter className="h-8 w-8"/>}
                    />
                    <SocialButton
                        name="LinkedIn"
                        link="https://www.linkedin.com/company/elixir-europe"
                        icon={<SiLinkedin className="h-8 w-8"/>}
                    />
                    <SocialButton
                        name="YouTube"
                        link="https://www.youtube.com/channel/UCvwFIw5HomylguGOGxR8B8w"
                        icon={<SiYoutube className="h-8 w-8"/>}
                    />
                    <SocialButton
                        name="Flickr"
                        link="https://www.flickr.com/photos/elixir-europe/"
                        icon={<SiFlickr className="h-8 w-8"/>}
                    />
                </div>
            </div>
        </div>
    );
};

const ElixirOrgs = () => {
    return (
        <div className="col-span-full lg:col-span-2 flex-1">
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 mx-auto">
                {[
                    ["https://uib.no/", "/images/logos/orgs/uib.svg", "UiB logo"],
                    ["https://uio.no/", "/images/logos/orgs/uio.svg", "UiO logo"],
                    ["https://uit.no/", "/images/logos/orgs/uit.svg", "UiT logo"],
                    ["https://ntnu.no/", "/images/logos/orgs/ntnu.svg", "NTNU logo"],
                    ["https://nmbu.no/", "/images/logos/orgs/nmbu.svg", "NMBU logo"],
                ].map(([href, imageUrl, alt]) => {
                    return (
                        <a href={href} target="_blank">
                            <img
                                src={imageUrl}
                                alt={alt}
                                className="invert-25 dark:invert-85 w-auto h-14 lg:h-16 scale-75 lg:scale-100"
                            />
                        </a>
                    )
                })}
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 mx-auto">
                {[
                    ["https://forskningsradet.no/", "/images/logos/orgs/nfr.svg", "Research Council of Norway logo"],
                    ["https://www.nordforsk.org", "/images/logos/orgs/nordforsk.svg", "Nordforsk logo"],
                    ["https://research-and-innovation.ec.europa.eu/", "/images/logos/orgs/eu.svg", "EU co-funded logo"],
                ].map(([href, imageUrl, alt]) => {
                    return (
                        <a href={href} target="_blank">
                            <img
                                src={imageUrl}
                                alt={alt}
                                className="invert-25 dark:invert-85 w-auto h-14 lg:h-16 scale-75 lg:scale-100"
                            />
                        </a>
                    )
                })}
            </div>
            <p className="text-sm text-center lg:max-w-2xl m-auto flex-1">
                Financed by the Research Council of Norway’s grants 208481, 270068, 295932, 
                the University of Bergen, the University of Oslo, the Arctic University
                of Norway in Tromsø, the Norwegian University of Science and Technology, 
                the Norwegian University of Life Sciences: NMBU, Nordforsk and co-funded by the European Union.
            </p>
        </div>
    );
};

const Links = () => {
    return (
        <div className="col-span-full lg:col-span-1 text-right place-content-end place-items-end place-self-center lg:place-self-end">
            <div role="list" className="flex sm:flex-row lg:flex-col gap-y-2 gap-x-2">
                <a href="#" className="text-sm leading-6">Helpdesk</a>
                <a href="#" className="text-sm leading-6">Careers</a>
                <a href="#" className="text-sm leading-6">Organizations</a>
                <a href="#" className="text-sm leading-6">Sitemap</a>
            </div>
        </div>
    );
};

const NewsletterSubscription = () => {
    return (
        <div className="mt-4 border-t border-gray-900/10 lg:flex lg:items-center lg:justify-between">
            <div className="mt-6">
                <h3 className="text-base font-semibold leading-6">
                    Subscribe to our newsletter
                </h3>
                <p className="text-sm">
                    Get the latest news, articles, and resources
                    delivered straight to your inbox.
                </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input type="email"
                       name="email-address"
                       id="email-address"
                       autoComplete="email"
                       required
                       className="w-full min-w-0 appearance-none rounded-md border-0 bg-slate-50 dark:bg-dark-surface px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:w-56 sm:text-sm sm:leading-6"
                       placeholder="Enter your email"/>
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button type="submit"
                            className="flex w-full items-center justify-center rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary hover:saturate-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

const SocialButton = ({ name, link, icon }) => {
    return (
        <a href={link} rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400">
            <span className="sr-only">{name}</span>
            {icon}
        </a>
    );
};

export default Footer;
