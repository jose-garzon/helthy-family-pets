import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { SessionProvider } from "next-auth/react";
import { AuthProtectedPage } from "../components/molecules/AuthComponents";

type ComponentProps = { auth: boolean };
interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & ComponentProps;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          {Component.auth ? (
            <AuthProtectedPage>
              <Component {...pageProps} />
            </AuthProtectedPage>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default MyApp;
