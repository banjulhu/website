import { CheckIcon } from '@heroicons/react/20/solid';
import { classNames } from "../lib/utils.ts";

export default function Pricing({ tiers }) {
    return (
        <div className="mt-12 isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 g:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
                <div
                    key={tier.id}
                    className={classNames(
                        tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                        tierIdx === 0 ? 'lg:rounded-r-none' : '',
                        tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                        'flex flex-col justify-between rounded-lg bg-slate-50 dark:bg-dark-surface ring-1 ring-gray-200 dark:ring-gray-700 p-8 lg:p-6',
                    )}
                >
                    <div>
                        <div className="flex items-center justify-between gap-x-2">
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier.mostPopular ? 'text-brand-primary' : 'text-gray-900',
                                    'text-lg font-semibold leading-8',
                                )}
                            >
                                {tier.name}
                            </h3>
                            {tier.mostPopular ? (
                                <p className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-xs font-semibold leading-5 text-brand-primary">
                                    Most popular
                                </p>
                            ) : null}
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-2xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                            {tier.period &&
                                <span className="text-sm font-semibold leading-6 text-gray-600">/{tier.period}</span>}
                        </p>
                        <ul role="list" className="mt-6 space-y-2 text-sm leading-6 text-gray-600">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-brand-primary"/>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={classNames(
                            tier.mostPopular
                                ? 'bg-brand-primary text-white shadow-sm hover:bg-brand-primary/75 hover:text-white'
                                : 'text-brand-primary ring-1 ring-inset ring-orange-200 hover:ring-orange-300',
                            'hover:text-brand-primary mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600',
                        )}
                    >
                        Contact
                    </a>
                </div>
            ))}
        </div>
    )
}
