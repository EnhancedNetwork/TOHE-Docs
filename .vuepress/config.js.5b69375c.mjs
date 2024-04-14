// docs/.vuepress/config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import searchPlugin from "@vuepress/plugin-search";
var config_default = defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English",
        home: "/"
      },
      "/zh-CN/": {
        selectLanguageName: "\u7B80\u4F53\u4E2D\u6587",
        home: "/translations/zh-CN/"
      }
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search"
        }
      }
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvbW9lYnMvT25lRHJpdmUvQnVyZWF1L0RldiBUb29scy9BbW9uZyBVcy9WdWVwcmVzcyBTaXRlIFRPSEUvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1vZWJzXFxcXE9uZURyaXZlXFxcXEJ1cmVhdVxcXFxEZXYgVG9vbHNcXFxcQW1vbmcgVXNcXFxcVnVlcHJlc3MgU2l0ZSBUT0hFXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbW9lYnMvT25lRHJpdmUvQnVyZWF1L0RldiUyMFRvb2xzL0Ftb25nJTIwVXMvVnVlcHJlc3MlMjBTaXRlJTIwVE9IRS9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXHJcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xyXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnXHJcbmltcG9ydCBzZWFyY2hQbHVnaW4gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxyXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xyXG4gICAgbG9jYWxlczoge1xyXG4gICAgICAnLyc6IHtcclxuICAgICAgICBzZWxlY3RMYW5ndWFnZU5hbWU6ICdFbmdsaXNoJyxcclxuICAgICAgICBob21lOiAnLycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcvemgtQ04vJzoge1xyXG4gICAgICAgIHNlbGVjdExhbmd1YWdlTmFtZTogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXHJcbiAgICAgICAgaG9tZTogJy90cmFuc2xhdGlvbnMvemgtQ04vJyxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBzZWFyY2hQbHVnaW4oe1xyXG4gICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgJy8nOiB7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb2IsU0FBUyxtQkFBbUI7QUFDaGQsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxrQkFBa0I7QUFFekIsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixTQUFTLFlBQVk7QUFBQSxFQUNyQixPQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxLQUFLO0FBQUEsUUFDSCxvQkFBb0I7QUFBQSxRQUNwQixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsUUFDcEIsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDUCxLQUFLO0FBQUEsVUFDSCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
