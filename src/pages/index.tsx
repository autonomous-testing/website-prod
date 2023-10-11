import clsx from "clsx";
import React from "react";

import Layout from "@theme/Layout";
import HomeTeam from "@site/src/components/HomeTeam";
import HomeAbout from "@site/src/components/HomeAbout";
import HomePricing from "@site/src/components/HomePricing";
import HomeCustomers from "@site/src/components/HomeCustomers";
import HomeSolutions from "@site/src/components/HomeSolutions";
import HomeHowItWorks from "@site/src/components/HomeHowItWorks";
import ButtonGradient from "../components/buttons/ButtonGradient";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./index.module.css";

function HomeHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "bg-primary-wopee dark:bg-secondary-wopee",
        styles.heroBanner
      )}
    >
      <div className="container">
        <div className="row align-items-center gap-y-10">
          <div
            className={clsx(
              "col col--6 flex flex-col justify-center items-center gap-y-2"
            )}
          >
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-primary-wopee text-secondary-wopee">
              {siteConfig.title}
            </h1>

            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className="max-w-fit self-center">
              <ButtonGradient />
            </div>
          </div>

          <div className={clsx("col col--6 flex justify-center")}>
            <img
              src="/img/wopee_head_1_2023-10-10.png"
              alt="Wopee"
              className="object-contain"
              width="50%"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Autonomous testing platform for web applications | Wopee.io"
    >
      <HomeHeader />
      <main>
        <HomeAbout />
        <HomeSolutions />
        <HomeHowItWorks />
        <HomeCustomers />
        <HomePricing />
        <HomeTeam />
      </main>
    </Layout>
  );
}