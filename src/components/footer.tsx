import { SiFlickr, SiLinkedin, SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-basic-black mt-24" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-full px-6 pb-8 pt-12 sm:pt-24 lg:px-8 lg:pt-24 flex flex-col-reverse gap-y-6">
                <NewsletterSubscription/>
                <div className="grid grid-cols-7 grid-rows-3 lg:grid-rows-1">
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
        <div className="flex flex-col gap-y-8 order-first col-span-full justify-between md:col-span-1">
            <a href="/">
                <img
                    className="h-24 w-auto"
                    src="/images/logos/elixir-no-light.svg"
                    alt="Elixir Norway"
                />
            </a>
            <div className="flex space-x-4">
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
    );
};

const ElixirOrgs = () => {
    return (
        <div className="col-span-full order-last md:order-2 md:col-span-5">
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 mx-auto">
                <a href="https://uib.no/" target="_blank">
                    <img
                        src="/images/logos/orgs/uib.svg"
                        alt="UiB logo"
                        className="brightness-0 invert w-auto h-16"
                    />
                </a>
                <a href="https://uio.no/" target="_blank">
                    <img
                        src="/images/logos/orgs/uio.svg"
                        alt="UiO logo"
                        className="brightness-0 invert w-auto h-16"
                    />
                </a>
                <a href="https://uit.no/" target="_blank">
                    <img
                        src="/images/logos/orgs/uit.svg"
                        alt="UiT logo"
                        className="brightness-0 invert w-auto h-16"
                    />
                </a>
                <a href="https://ntnu.no/" target="_blank">
                    <img
                        src="/images/logos/orgs/ntnu.svg"
                        alt="UiT logo"
                        className="brightness-0 invert w-auto h-16"
                    />
                </a>
                <a href="https://nmbu.no/" target="_blank">
                    <img
                        src="/images/logos/orgs/nmbu.svg"
                        alt="UiT logo"
                        className="brightness-0 invert w-auto h-16"
                    />
                </a>
            </div>
            <div className="flex items-center justify-center">
                <a href="https://forskningsradet.no/" target="_blank">
                    <img
                        src="/images/logos/orgs/nfr.svg"
                        alt="Forskningsradet logo"
                        className="brightness-0 invert w-auto h-20"
                    />
                </a>
            </div>
            <p className="text-sm leading-5 text-gray-400 text-center lg:max-w-2xl m-auto self-end place-content-end place-items-ends">
                Financed by the Research Council of Norway’s grants 208481, 270068, 295932,
                the University of Bergen, the University of Oslo, the Arctic University
                of Norway in Tromsø, the Norwegian University of Science and Technology
                and the Norwegian University of Life Sciences: NMBU
            </p>
        </div>
    );
};

const Links = () => {
    return (
        <div
            className="col-span-full text-right self-center justify-center align-bottom items-end order-2 md:order-last  md:col-span-1">
            <div role="list" className="flex sm:flex-row lg:flex-col gap-x-2 justify-items-center">
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Helpdesk</a>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Careers</a>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Sitemap</a>
            </div>
        </div>
    );
};

const NewsletterSubscription = () => {
    return (
        <div className="mt-4 border-t border-gray-900/10 lg:flex lg:items-center lg:justify-between">
            <div>
                <h3 className="text-base font-semibold leading-6">
                    Subscribe to our newsletter
                </h3>
                <p className="text-sm">
                    Get the latest news, articles, and resources
                    delivered straight to your inbox.
                </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input type="email"
                       name="email-address"
                       id="email-address"
                       autoComplete="email"
                       required
                       className="w-full min-w-0 appearance-none rounded-md border-0 bg-basic-space-gray px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
                       placeholder="Enter your email"/>
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button type="submit"
                            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe
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
