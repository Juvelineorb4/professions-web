// lib/auth.js
import { withSSRContext } from 'aws-amplify';

export const requireAuth = async (context) => {
    const { Auth } = withSSRContext(context);

    try {
        const user = await Auth.currentAuthenticatedUser();

        // Seleccionamos solo propiedades serializables del objeto user
        const serializableUser = {
            username: user.username,
            attributes: user.attributes // Puedes extraer solo las propiedades que necesitas
        };

        return {
            props: {
                user: serializableUser
            }
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
};
