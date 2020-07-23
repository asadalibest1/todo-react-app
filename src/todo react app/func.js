
export const getValueFromInput = event =>{
    const value = event.target.value
    this.props.dispatchInputField(value)
    // console.log(this.props.inputField)
}