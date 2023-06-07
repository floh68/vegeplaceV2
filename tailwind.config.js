/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      "colors": {
        "fond": "#f0f2f2",
        "texte": "#242d3e",
        "accompagnement1": "#86bf6b",
        "acompagnement": "#f29f05",
        "nuance1": "#ffa704",
        "nuance2": "#ffbf48",
        "nuance3": "#e05303",
        "nuanceA": "#81d766",
        "nuanceB": "#b3f274"
       },
       "fontSize": {
        "base": "0.9375rem",
        "lg": "1.25rem",
        "xl": "1.5625rem",
        "2xl": "1.875rem",
        "3xl": "3.125rem",
        "4xl": "5rem"
       },
       "fontFamily": {
        "ramaraja": "Ramaraja",
        "open-sans": "Open Sans",
        "pt-serif": "PT Serif"
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.28740638494491577rem",
        "sm": "0.3125rem",
        "default": "0.322826087474823rem",
        "lg": "0.33014115691185rem",
        "xl": "0.35511335730552673rem",
        "2xl": "0.37505343556404114rem",
        "3xl": "0.3751600980758667rem",
        "4xl": "0.4464285969734192rem",
        "5xl": "0.4507034420967102rem",
        "6xl": "0.4910714328289032rem",
        "7xl": "0.5169588923454285rem",
        "8xl": "0.5233433842658997rem",
        "9xl": "0.625rem",
        "10xl": "0.628898024559021rem",
        "11xl": "0.7801418304443359rem",
        "12xl": "0.8667188882827759rem",
        "13xl": "0.8854166269302368rem",
        "14xl": "0.903253436088562rem",
        "15xl": "0.9182363152503967rem",
        "16xl": "0.9375rem",
        "17xl": "0.9385856986045837rem",
        "18xl": "1rem",
        "19xl": "1.0104166269302368rem",
        "20xl": "1.106382966041565rem",
        "21xl": "1.285021424293518rem",
        "22xl": "1.875rem",
        "23xl": "1.8986742496490479rem",
        "24xl": "2.019230604171753rem",
        "25xl": "2.1063828468322754rem",
        "26xl": "2.255319118499756rem",
        "27xl": "3rem",
        "28xl": "3.4375rem",
        "full": "9999px"
       }
  },
  plugins: []
  }}
