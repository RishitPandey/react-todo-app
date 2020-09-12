console.log('app js running')
//JSX-javascript xml

const userobj = {
    name: "Rishit",
    age: 21,
    city: "Mumbai",
    options: ["One", "Two"]
}
const nullcheck = (value) => {
    if(value) {
        return <p>{value}</p>
    } else {
        return <p>Unknown</p>
    }
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if(option) {
        userobj.options.push(option)
        e.target.elements.option.value = ""
    }
    OptionsApp()
}

const randoption = () => {
    let num = Math.floor(Math.random() * userobj.options.length)
    alert(userobj.options[num])
}

const div = document.getElementById('react-content')

const OptionsApp = () => {
    const template = (
        <div>
            <h1>React Content</h1>
            <h2>{userobj.name}</h2>
            {(userobj.age && userobj.age>18) && <p>{userobj.age}</p>}
            <p>This is jsx from app.js</p>
            <p>{userobj.options.length}</p>
            <ol>
                {
                    userobj.options.map((option) => {
                        return <p key={option}>{option}</p>
                    })
                }
            </ol>
            <button disabled={userobj.options.length===0} onClick={randoption}>What to select?</button>
            {userobj.city && <p>{userobj.city}</p>}
            <form  onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        )
        
        
        
        
        
        ReactDOM.render(template, div)
}

OptionsApp()