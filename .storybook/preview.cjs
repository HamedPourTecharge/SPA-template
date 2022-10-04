//import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import "tailwindcss/tailwind.css";
// import initStore from "../src/store/initStore";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color|colour)$/i,
      date: /Date$/,
    },
  },
}

// export const loaders = [
//   async () => ({
//     initStore: await initStore.init(),
//   }),
// ];