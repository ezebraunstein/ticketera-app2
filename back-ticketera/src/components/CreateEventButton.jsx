import "./CreateEventButton.css";

function CreateEventButton({ onClick }) {

    // const handleClick = () => {
    //     window.location.href = 'https://chat.openai.com/chat';
    // }

    return (
        <div className="box-1">
            <div className="btn btn-one" onClick={null}>
                <span>Crear Evento</span>
            </div>
        </div>
    );
}

export default CreateEventButton;