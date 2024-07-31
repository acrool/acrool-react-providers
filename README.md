# Acrool React Providers

<a href="https://acrool-react-providers.pages.dev/" title="Acrool React Providers - This is a compose providers avoid nesting for React Function">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-providers/main/example/public/og.webp" alt="Acrool React Providers Logo"/>
</a>

<p align="center">
    This is a compose providers avoid nesting for React Function
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-providers.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-providers)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-providers?style=for-the-badge)](https://github.com/acrool/@acrool/react-providers/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-providers?style=for-the-badge)](https://github.com/acrool/react-providers/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-providers.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-providers)
[![npm](https://img.shields.io/npm/dt/@acrool/react-providers.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-providers)

</div>




## Features

- Compose providers avoid nesting
- Support type check

## Install

```bash
yarn add @acrool/react-providers
```

## Usage

then in your page

```tsx
import composedProviders, {providerWithProps} from "@acrool/react-providers";

const Providers = composeProviders(
    [
        providerWithProps(ReduxProvider, {store}),
        providerWithProps(Router, {history: history, basename: routePrefixPath}),
        providerWithProps(ApolloProvider, {client: apolloClient}),
        providerWithProps(ReactQueryClientProvider, {}),
        providerWithProps(LanguageProvider, {}),
        providerWithProps(AxiosClientProvider, {}),
        providerWithProps(StyleSheetManager, {stylisPlugins: [rtlPlugin]}),
        providerWithProps(GridThemeProvider, {gridTheme: gridConfig}),
        providerWithProps(ThemeProvider, {theme: appTheme}),
    ]
)(App);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Providers/>);

```

## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
