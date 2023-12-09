const getStoredData =()=>{
    const storedData = localStorage.getItem('MyEvents');
    if(storedData)
    {
        return JSON.parse(storedData)
    }
    return []
}



const savedData = id =>{
    const storedData= getStoredData();
    const exist = storedData.find(Id => Id == id);
    if(!exist){
        storedData.push(id);
        localStorage.setItem('MyEvents', JSON.stringify(storedData))
    }


}

export {savedData, getStoredData}