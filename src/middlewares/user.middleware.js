const checkEmptyUsers = async (users)=>
{
    if(!users)
    {
        return false;
    }
    return true;
}

export {checkEmptyUsers};