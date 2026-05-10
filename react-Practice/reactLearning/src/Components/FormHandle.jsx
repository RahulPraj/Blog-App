import React from 'react'

const FormHandle = () => {

    const [userName, setuserName] = useState(' ');

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(userName);

        setuserName('');
    }


  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input
            onChange={(e)=>{
                    setuserName(e.target.value)
            }}
             type="text" placeholder='enter your name' />
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormHandle