'use client';
import SectionTitle from '@/components/SectionTitle';
import Script from 'next/script';
import React from 'react';

const LatestUpdates = () => {
    return (
        <section className="pb-section" id="latest-updates">
            <div className="container">
                <SectionTitle title="LATEST UPDATES" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full h-full min-h-[550px] bg-background-light rounded-lg overflow-hidden p-4 flex items-center justify-center">
                        <blockquote className="twitter-tweet">
                            <p lang="en" dir="ltr">
                                GM GM , did a workshop on blockchain at our
                                college last thursday
                                <br />
                                <br />
                                -intro to blockchain
                                <br />
                                -web3 developement <br />
                                -how to not get scammed
                                <br />
                                <br />
                                Had crazy response throughout the session🙌{' '}
                                <a href="https://twitter.com/c1ph3rc3ll?ref_src=twsrc%5Etfw">
                                    @c1ph3rc3ll
                                </a>{' '}
                                <a href="https://t.co/xcRFXPpiA4">
                                    https://t.co/xcRFXPpiA4
                                </a>
                            </p>
                            &mdash; fahmin.eth (@fahmin_md){' '}
                            <a href="https://twitter.com/fahmin_md/status/1980213474719601058?ref_src=twsrc%5Etfw">
                                October 20, 2025
                            </a>
                        </blockquote>
                        <Script
                            async
                            src="https://platform.twitter.com/widgets.js"
                            charSet="utf-8"
                        />
                    </div>
                    {/* LinkedIn Post 1 (Provided Embed) */}
                    <div className="w-full h-full min-h-[550px] bg-background-light rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7396619231494266883?collapsed=1"
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded post"
                            className="w-full h-full min-h-[550px]"
                        ></iframe>
                    </div>

                    {/* LinkedIn Post 2 */}
                    <div className="w-full h-full min-h-[550px] bg-background-light rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7394319595332882432"
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded post"
                            className="w-full h-full min-h-[550px]"
                        ></iframe>
                    </div>

                    {/* LinkedIn Post 3 */}
                    <div className="w-full h-full min-h-[550px] bg-background-light rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7310027269735964673"
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded post"
                            className="w-full h-full min-h-[550px]"
                        ></iframe>
                    </div>

                    {/* LinkedIn Post 4 */}
                    <div className="w-full h-full min-h-[550px] bg-background-light rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7298978781539536896"
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded post"
                            className="w-full h-full min-h-[550px]"
                        ></iframe>
                    </div>

                    {/* Twitter Post */}

                </div>
            </div>
        </section>
    );
};

export default LatestUpdates;
