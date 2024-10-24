import "../../public/styles/globals.css";
import "../../public/styles/font.css";
import "../configureAmplify";
import { useEffect } from "react";
import { Hub, Auth, withSSRContext } from "aws-amplify";

import { useRouter } from "next/navigation";



export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req }); // Autenticación con SSR
  try {
    // Obtén el usuario autenticado
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: { user }, // Si el usuario está autenticado, pasa los datos al componente
    };
  } catch (error) {
    // Si no está autenticado, redirige a la página de login
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // crear subscripcion
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          // router.push("/home");
          break;
        case "signIn_failure":
          break;
        case "signOut":
          router.push("/");
          break;
        default:
          break;
      }
    });
    checkUser();
    return unsubscribe;
  }, []);
  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      router.push("/home");
    } catch (error) {
      router.push("/");
    }
  };
  return <Component {...pageProps} />;
}


