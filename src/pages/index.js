import React from "react";
import SignIn from "./login.jsx";
import { withSSRContext } from 'aws-amplify';

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw',
        height: '100vh'
      }}
    >
      <SignIn />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);

  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null
      }
    };
  }
};


export default Main;
