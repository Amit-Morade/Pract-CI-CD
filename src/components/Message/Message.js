export default function Message({message}) {
    const upperCaseMessage = message.toUpperCase();

    return <p>{upperCaseMessage}</p>
}