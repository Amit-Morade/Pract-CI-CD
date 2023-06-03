export default function Message({message}) {
    const upperCaseMessage = message.toLowerCase();

    return <p>{upperCaseMessage}</p>
}