import React from 'react'

class ClientesCadastrados extends React.Component {
  render() {
    return(
    <>
      <form action="">
        <fieldset>
          Nome:
          <input
            className="nome"
            name="nome"
            type="text"
            requided
            onChange={}                  
          />
          E-mail:
          <input
            className="email"
            name="email"
            type="text"
            requided
            onChange={}                  
          />
          Idade:
          <input
            className="idade"
            name="idade"
            type="text"
            maxLenght="2"
            requided
            onChange={}                  
          />
          <button
            type="button"
          /> 
        </fieldset>  
      </form>
    </>
    )
  }
}

export default ClientesCadastrados;