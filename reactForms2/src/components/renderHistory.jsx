const RenderHistory = (props) => {
    const close = (event) => {

    }

    const edit = (event) => {

    }

    props.trainList.map((item) => {
        return (
            <div className="note" key={item.data}>
                <p>{item.data}</p>
                <p>{item.distance}</p>
                <button onClick={edit}>edit</button>
                <button onClick={close}>X</button>
            </div>
        )
    })
}

export default RenderHistory;