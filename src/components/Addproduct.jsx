import React from 'react'

const Addproduct = () => {
  return (
    <div>
      <TextField label='name' name='name' value={input.name}
      />
      <Typography>{input.name}</Typography>
      <br/>
      <br/>
      <TextField label='brand' name='brand' value={input.brand}
      />
      <Typography>{input.brand}</Typography>
      <br/>
      <br/>
      <TextField label='quantity' name='quantity' value={input.quantity}
      />
      <Typography>{input.quantity}</Typography>
      <br/>
      <br/>
      <TextField label='price' name='price' value={input.price}
      />
      <Typography>{input.price}</Typography>
      <br/>
      <br/>
      <Button  color='success'>Update</Button>

    </div>
  )
}

export default Addproduct
