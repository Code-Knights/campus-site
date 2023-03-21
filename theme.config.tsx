import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import GitTimesTamp from "./components/GitTimesTamp";

const config: DocsThemeConfig = {
  banner: {
    key: "0.3.0-release",
    text: (
      <a href="https://github.com/Code-Knights/campus-site" target="_blank">
        🎉 Campus Learn 0.3.0 is released. Read more →
      </a>
    ),
  },
  logo: <span style={{ fontWeight: "bold" }}>🚀 Campus</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Campus",
    };
  },
  project: {
    link: "https://github.com/Code-Knights/campus-site",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/Code-Knights/campus-site/edit/main/",
  footer: {
    component: <Footer />,
    // text: "Campus"
  },
  head: () => {
    const { frontMatter, title } = useConfig();
    const { asPath, defaultLocale, locale } = useRouter();
    const url =
      "http://localhost:3000" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <link rel="icon" type="image/png" href="/logo/logo.png" />
        <meta name="google-site-verification" content="fxuMx0DQopAK0K-p_yBEgzZCNax3vqyON-bv5zTg0j0" />
        <meta property="og:url" content={url} />
        {/* <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        /> */}
        <meta property="og:title" content={locale} />
        <meta property="keyword" content={frontMatter.keywords} />
        <meta name="author" content="miyucutee"/>
        <meta name="application-name" content="docs"/>
        <meta property="og:image" content="/logo/logo.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="ID"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={locale}/>
        <meta name="twitter:description" content={frontMatter.description} />
      </>
    );
  },
  feedback: {
    content: "Feedback",
    labels: "feedback",
  },
  gitTimestamp: <GitTimesTamp />
};

export default config;
