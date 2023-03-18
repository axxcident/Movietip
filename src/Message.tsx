
// In react functions, always follow PascalCasing
function Message() {
  const namnet = 'Ackman'
  // returning JSX: Javascript XML
  if(namnet) {
    return <h1>Hello {namnet}</h1>;
  }
  else {
    return <h1>Hello World</h1>;
  }

}

export default Message;
