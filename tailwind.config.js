/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     // tailwind를 사용할 곳
    // ** : 모든폴더
    // * : 모든 파일.{확장자명}
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  // media : 다크모드 설정은 환경설정을 따라간다
  // class : 수동 활성화 (react , js로)
  darkMode:"class",
  plugins: [],
}
