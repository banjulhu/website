import { SiFlickr, SiLinkedin, SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-24" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-24 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-7 grid-rows-3 lg:grid-rows-1">
                    <div className="flex flex-col gap-y-8 order-first col-span-full md:col-span-1">
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
                        <p className="text-sm leading-5 text-gray-400 text-center lg:max-w-2xl m-auto">
                            Financed by the Research Council of Norway’s grants 208481, 270068, 295932, the University
                            of
                            Bergen, the University of Oslo, the Arctic University of Norway in Tromsø, the Norwegian
                            University of Science and Technology and the Norwegian University of Life Sciences: NMBU
                        </p>
                    </div>
                    <div className="col-span-full self-center align-bottom items-end order-2 md:order-last  md:col-span-1">
                        <a type="button"
                           href=""
                           className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">Contact
                            us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialButton = ({ name, link, icon }) => {
    return (
        <a href={link} rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400">
            <span className="sr-only">{name}</span>
            {icon}
        </a>
    );
};

export default Footer;
