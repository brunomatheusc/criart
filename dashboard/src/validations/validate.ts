import * as Yup from 'yup';

export async function validateSignIn(data: { email: string, password: string }){
    const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
    });

    return await schema.validate(data);
}