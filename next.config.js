/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "@/assets/styles/abstracts/_variables.scss";
      @import "@/assets/styles/abstracts/_mixins.scss";
    `, // prependData 옵션 추가
  },
}

module.exports = nextConfig
