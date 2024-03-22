const checkEmpty = (email, password)=>
{
    if(!email && !password)
    {
        return false
    }
    return true
}

export {checkEmpty}