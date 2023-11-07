
export type FormLoginProps = {
    errorMessage?: string,
    onLogin?: (email:string, password:string) => Promise<void>,
};

export const FormLogin = ({errorMessage, onLogin}: FormLoginProps) =>{
    return (
        <>
        <h1>OI</h1>
        </>
    )
}