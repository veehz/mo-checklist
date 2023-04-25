import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        id="tag-manager"
        src="https://www.googletagmanager.com/gtag/js?id=G-VDMR617ED6"
        strategy="afterInteractive"
      ></Script>
      <Script id="run-tag-manager" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VDMR617ED6');
        `}
      </Script>
    </>
  );
}
