import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"
import { useEffect } from 'react'

export default class MyDocument extends NextDocument {
    render() {
        function handleState() {
            window.splitbee.track("Button Click")
        }

        useEffect(() => {
            window.addEventListener('load', handleState)
            return () => {
                window.removeEventListener('load', handleState)
            }
        })
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <Head>
                    <script async src="https://cdn.splitbee.io/sb.js"></script>
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}