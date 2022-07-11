I.các npm cần cho dự án

-   reset css
    npm install --save css-reset-and-normalize
-   customize-cra cấu hình webback
    npm i customize-cra react-app-rewired -D
    link github tham khảo thêm : (https://github.com/arackaf/customize-cra)

    -   kiểm tra thành công trong file package.json
        "devDependencies": {
        "customize-cra": "^1.0.0",
        "react-app-rewired": "^2.2.1",}

                    -   tạo file config-overrides.js để cáu hình webback

                        const { override, useBabelRc } = require("customize-cra");

                        module.exports = override(
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        useBabelRc()
                        );

                    -   trong file package.json sửa

                        "scripts": {

                          "start": "react-app start",
                          "build": "react-app build",
                          "test": "react-app test",
                          "eject": "react-app eject"
                          }

                          thành ->

                      "scripts": {

                        "start": "react-app-rewired start",
                        "build": "react-app-rewired build",
                        "test": "react-app-rewired test",
                        "eject": "react-app-rewired eject"
                        }

-   Cài đặt babel plugin module resolver
    npm install --save-dev babel-plugin-module-resolver
    link github tham khảo: (https://github.com/tleunen/babel-plugin-module-resolver)

                    - kiểm tra thành công trong file package.json
                         "devDependencies": {
                            "babel-plugin-module-resolver": "^4.1.0",
                            <!-- "customize-cra": "^1.0.0",
                            "react-app-rewired": "^2.2.1",
                            "sass": "^1.53.0" -->
                        }

                -tạo file .babelrc

                    {

                        "plugins": [
                        [
                        "module-resolver",
                        {
                        "alias": {
                        "~": "./src"
                        }
                        }
                        ]
                        ]
                        }
                - tạo file jsconfig.json

                    {

                    "compilerOptions": {
                    "baseUrl": ".",
                    "paths": {
                    "~/*": ["src/*"]
                    }
                    }
                    }

-   Cài đặt và cấu hình Prettier trên VS Code
    tạo file .prettierrc
    {
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
    }
    tạo folder file
    folder .vscode
    file settings.json
    {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
-   Cấu hình sử dụng CSS, SASS
    npm i -D sass

-   tạo folder component GlobalStyles
-   tạo file index.js
    import './GlobalStyles.scss';
    function GlobalStyles({ children }) {
    return children;
    }
    export default GlobalStyles;

-   tạo file GlobalStyles.scss
    {
    @import 'normalize.css';
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

    :root {
    }

    html {
    font-size: 62.5%;
    }

    -   {
        box-sizing: border-box;
        }

    body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    }

    }

-   Cấu hình Router và xây dựng cơ chế tải Layout cho dự án Tiktok

    npm i react-router-dom
    "dependencies": {
      <!-- "@testing-library/jest-dom": "^5.16.4",
      "@testing-library/react": "^13.3.0",
      "@testing-library/user-event": "^13.5.0",
      "normalize.css": "^8.0.1",
      "react": "^18.2.0",
      "react-dom": "^18.2.0", -->

    "react-router-dom": "^6.3.0",
      <!-- "react-scripts": "5.0.1",
      "web-vitals": "^2.1.4" -->

    },

    <!-- //////////////////////////////// -->

    thư viện hỗ trợ thêm

    -   thư viện classnames
        -   npm i classnames
            <!-- ///////////////////////////// -->
            deploy ứng dụng lên netlify
            https://www.youtube.com/watch?v=R65aFh-Dstw
