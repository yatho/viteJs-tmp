export default function Production() {
    return <>{import.meta.env.DEV ? 'en dev' : ''}</>
}