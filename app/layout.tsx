import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import Image from 'next/image'

import {Banner, Head, Search} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

const navbar = (
    <Navbar
        logo={(
            <div className='logo'>
            <Image src='/images/general/logofinal.png' alt='logo' width={60} height={40} className='h-fit' />
            <span className='logo-text'>
                NoCodeNoBrain - AI Next Generation
            </span>
            </div>
        )}
        projectLink='https://github.com/diegofan-code'
        chatLink='https://www.linkedin.com/in/diego-fan-636b1b1a2/'
        projectIcon={<svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18"><title>GitHub</title><path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path></svg>}
        chatIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="32" height="32" focusable="false"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>}
        // ... Your additional navbar options
    />
)
const footer = (
    <Footer>
        <time>{new Date().getFullYear()}</time> © Diego Fan.
        <p>
            &nbsp;Built with{' '}
            <a href='https://nextra.site/' target='_blank' rel='noopener noreferrer' className='underline'>
              Nextra
            </a>{' '}
            and{' '}
            <a href='https://vercel.com/' target='_blank' rel='noopener noreferrer' className='underline'>
              Vercel
            </a>.
        </p>
    </Footer>)

export default async function RootLayout({children}) {
    
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="/images/general/icon.svg"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            footer={footer}
            editLink=''
            feedback={{content: ''}}
            search={<Search placeholder='Search content...' />}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}