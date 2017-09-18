import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { bodyFont } from '../utils/fonts'

const resetStyles = `
  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}

  html,
  body {
    font-size: 18px;
    line-height: 1.6;
    font-family: ${bodyFont};
    font-style: normal;
    padding: 0;
    margin: 0;
    color: rgb(46, 68, 78);
    -webkit-font-smoothing: subpixel-antialiased;
    @media (max-width: 1000px) {
      font-size: 16px;
    }
  }
  @font-face {
    font-family: 'Avenir Next';
    font-style: normal;
    font-weight: 300;
    src: local('Avenir Next'), local('Avenir-Next-Thin'), url(/static/fonts/avenir-next-thin.woff) format('woff');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }
 
  @font-face {
    font-family: 'Avenir Next';
    font-style: normal;
    font-weight: 400;
    src: local('Avenir Next'), local('Avenir-Next-Regular'), url(/static/fonts/avenir-next-regular.woff) format('woff');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }
 
  @font-face {
    font-family: 'Avenir Next';
    font-style: normal;
    font-weight: 700;
    src: local('Avenir Next'), local('Avenir-Next-Bold'), url(/static/fonts/avenir-next-bold.woff) format('woff');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }
`


export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(Component => props =>
      sheet.collectStyles(<Component {...props} />
    ))

    const styles = sheet.getStyleElement()

    return { ...page, styles }
  }

  render () {
    const { styles } = this.props

    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="manifest" href="/static/manifest.json" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

          <meta name="theme-color" content="#FEA600" />
          <meta name="author" content="morajabi" />

          <link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Assistant:400,600,700,800" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />

          {styles}
       </Head>

       <body>
         <div className="root">
           <Main />
         </div>

         <NextScript />
       </body>
     </html>
    )
  }
}
